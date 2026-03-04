import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  const sortedPosts = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  const siteUrl = context.site?.toString().replace(/\/+$/, "") ?? "";

  const items = sortedPosts.map((post) => {
    if (post.data.external) {
      return {
        title: post.data.title,
        pubDate: post.data.date,
        link: post.data.url,
      };
    }

    return {
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${siteUrl}/blog/${post.id}`,
    };
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: siteUrl,
    items,
  });
}
