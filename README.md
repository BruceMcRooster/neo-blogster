# Blogster

Theme: **minimal**

NeoBlogster is a beautiful, accessible and performant blog template built with [Astro](https://astro.build) 5.0.

It is a modernizing port of Blogster, who's demo you can find [here](https://blogster-minimal.netlify.app).

## Minimal Template

A light weight theme built with plain old HTML and CSS. No external fonts or icons. Zero JavaScript. You get a full functional nice looking blog that loads super fast.

- **Lean**. No external fonts or icons. Zero JavaScript. Zero Runtime. Only ~6kB.
- **Fast**. Fast by default. Astro websites are engineered to be fast and load before you could blink, even when not cached.
- **Dark mode**. All themes have light/dark mode built-in.
- **Mobile first**. Responsive and loads fast in all devices.
- **Accessible**. A well thought out semantic and accessible content.
- **Perfect lighthouse score.** 100 across the board.
- **Easy content authoring**. Author content using markdown (`.md`) from your code editor or directly in GitHub.
- **Extended markdown with [MDX](https://mdxjs.com).** Type-safe custom components like YouTube embed, Twitter embed (or anything you want really) in your markdown (`.mdx`) files.
- **RSS feed**. Your blog has an RSS feed setup that can be accessed at `/rss.xml`.
- **SEO**. All pages are setup with all the SEO you might need.

## How do I add content?

All the content is written in markdown (.md) (optionally .mdx for extended features) and grouped as `blog` or `projects` in the `content` directory. All the default markdown syntax will work. You also have a few example custom markdown elements like _YouTube embed_, _Twitter embed_, etc. You can create your own custom components too by creating a custom component file in `src/components`.

## How do I make it my blog?

Easy.

- All content is static and everything is straight forward. Change whatever you need to change.
- Delete or update the content in `content/{content-group}`. `content-group` could be `blog`, `projects` or `anything`.
- (Optional) If you need more content types like _Notes_, just create a new dir in `content` and add a new frontmatter validator in `src/content.config.ts`.

## How do I deploy?

`bun run build`/`npm run build` will generate a static website in `dist` dir. You can host it with any static hosting. If you need a recommendation, check out [Netlify](netlify.com).

## Credit

Thanks to other templates that inspired this theme.

- [Blogster Minimal](https://github.com/flexdinesh/blogster)
- [Official Astro Blog template](https://github.com/withastro/astro/tree/main/examples/blog)
- [Bear Blog](https://github.com/HermanMartinus/bearblog/).

## License

MIT © [Dinesh Pandiyan](https://github.com/flexdinesh)
MIT © [Evan Foster](https://github.com/BruceMcRooster) (porting and upgrades)
