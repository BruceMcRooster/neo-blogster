import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import markdoc from "@astrojs/markdoc";

export default defineConfig({
  site: "https://yourwebsiteurl.com",
  integrations: [sitemap(), markdoc()],
  markdown: {
    shikiConfig: {
      // coldark-dark closely matches the Prism theme previously used
      theme: "coldark-dark",
    },
  },
});
