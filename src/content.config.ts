import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { WRITER_TIMEZONE } from "./config";
import { DateTime } from "luxon";

const baseSchema = z.object({
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  title: z.string({
    required_error: "Required frontmatter missing: title",
    invalid_type_error: "title must be a string",
  }),
  date: z.coerce.date().transform((dateInUtc : Date) => {
    // Zod will parse the date as UTC.
    // Hard convert it to writer's timezone (don't let it change the time for the timezone shift).
    return DateTime.fromJSDate(dateInUtc, { zone: 'UTC' })
      .setZone(WRITER_TIMEZONE, { keepLocalTime: true })
      .toJSDate();
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.discriminatedUnion("external", [
    // markdown post
    baseSchema.extend({
      external: z.literal(false),
      description: z.optional(z.string()),
      ogImagePath: z.optional(z.string()),
      canonicalUrl: z.optional(z.string()),
    }),
    // external link post
    baseSchema.extend({
      external: z.literal(true),
      url: z.string({
        required_error:
          "external is true but url is missing. url must be set for posts marked as external.",
        invalid_type_error: "external should be string.",
      }),
    }),
  ]),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/projects" }),
  schema: baseSchema.extend({
    url: z.string(),
  }),
});

export const collections = { blog, projects };
