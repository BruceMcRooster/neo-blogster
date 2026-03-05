import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeCallouts from "rehype-callouts";
import rehypeSemanticBlockquote from "rehype-semantic-blockquote";

export default defineConfig({
  site: "https://yourwebsiteurl.com",
  integrations: [sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        dark: "catppuccin-macchiato",
        light: "catppuccin-latte",
      },
      wrap: false,
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [rehypeCallouts, { theme: "vitepress" }],
      [rehypeSemanticBlockquote, { className: 'quote' }],
    ],
  }
});
