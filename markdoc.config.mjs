import { defineMarkdocConfig, component, nodes } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
  extends: [
    shiki({
      // catppuccin-macchiato matches the aesthetic of the previous Prism theme
      theme: "catppuccin-macchiato",
      wrap: false,
    }),
  ],
  tags: {
    details: {
      render: component("./src/components/markdoc/Details.astro"),
      children: nodes.document.children,
    },
    summary: {
      render: component("./src/components/markdoc/Summary.astro"),
      children: nodes.document.children,
    },
    sup: {
      render: "sup",
      children: nodes.strong.children,
    },
    sub: {
      render: "sub",
      children: nodes.strong.children,
    },
    abbr: {
      render: "abbr",
      attributes: {
        title: { type: String },
      },
      children: nodes.strong.children,
    },
    kbd: {
      render: "kbd",
      children: nodes.strong.children,
    },
    mark: {
      render: "mark",
      children: nodes.strong.children,
    },
    youtube: {
      render: component("./src/components/YouTubeEmbed.astro"),
      attributes: {
        url: { type: String, required: true },
        label: { type: String, required: true },
      },
      selfClosing: true,
    },
    tweet: {
      render: component("./src/components/TweetEmbed.astro"),
      attributes: {
        url: { type: String, required: true },
      },
      selfClosing: true,
    },
    codepen: {
      render: component("./src/components/CodePenEmbed.astro"),
      attributes: {
        url: { type: String, required: true },
        title: { type: String, required: true },
      },
      selfClosing: true,
    },
    githubgist: {
      render: component("./src/components/GitHubGistEmbed.astro"),
      attributes: {
        id: { type: String, required: true },
      },
      selfClosing: true,
    },
  },
});
