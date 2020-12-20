---
title: Humdrum monorepo
slug: week-5
summary: A week of research.
date: 2020-10-02
---

I took the seed of [Garth/humdrum-svelte](https://github.com/GarthDB/humdrum-svelte) and [Humdrum UI](https://github.com/GarthDB/humdrum-ui) and moved it to a new monorepo that contains 3 projects:

- [@dsengineer/tokens](https://www.npmjs.com/package/@dsengineer/tokens) which contains the design tokens (name value pairs for the design system). I used [Style Dictionary](https://amzn.github.io/style-dictionary/) as the build and organization tool.
- [@dsengineer/css](https://www.npmjs.com/package/@dsengineer/css) takes the tokens from @dsengineer/tokens and applies them to a CSS implementation.
- [@dsengineer/svelte](https://www.npmjs.com/package/@dsengineer/svelte) imports the CSS from @dsengineer/css and uses it in a Svelte lib. This also has a [Storybook](https://storybook.js.org/) implementation. It is published at [designsystems.engineer/designsystem](https://designsystems.engineer/designsystem)

This single unified repository makes it so much easier to build and test the components, css, and tokens.
