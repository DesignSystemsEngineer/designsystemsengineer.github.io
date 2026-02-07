# Design Systems Engineer

A content-first thought-leadership site for codifying design decisions. Built with [Eleventy](https://www.11ty.dev/).

## Local development

This project uses [proto](https://moonrepo.dev/proto) only for Node version management (not nvm). Node 20 (LTS) is pinned in [`.prototools`](.prototools).

1. **Install Node via proto** (if not already installed):
   ```bash
   proto install
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   Or use proto to run npm: `proto run npm install`

3. **Start the dev server** (with live reload):
   ```bash
   npm start
   ```
   Or: `proto run npm start`

4. **Production build**:
   ```bash
   npm run build
   ```

5. **Serve the production build locally**:
   ```bash
   npm run serve
   ```

## Content authoring

- **Posts (blog):** Add markdown files in `src/posts/`. Use frontmatter: `title`, `description`, `date`, `tags`, and optional `layout`.
- **Frameworks:** Add markdown in `src/frameworks/`. Use `title`, `description`, and optional `tags`.
- **References:** Add markdown in `src/references/`. Use `title`, `description`, and optional `tags`.

Directory data files (`posts.json`, `frameworks.json`, `references.json`) set default layout and permalink patterns.

## Design tokens

Styles are driven by CSS custom properties in `src/assets/css/tokens.css`:

- **Colors:** `--color-bg`, `--color-fg`, `--color-link`, `--color-accent`, `--color-muted`, `--color-border`
- **Focus:** `--focus-ring`, `--focus-ring-offset`
- **Typography:** `--font-base`, `--font-mono`, `--type-scale-*`, `--line-height-*`
- **Spacing:** `--space-*` (xs, sm, md, lg, xl, 2xl)
- **Layout:** `--content-width`, `--wide-width`

Import `tokens.css` first in the main stylesheet; other CSS files use these variables.

## Deployment

The site is built and deployed to GitHub Pages via GitHub Actions when changes are pushed to `main`.

1. In the repo: **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds Eleventy and deploys the `_site` output
4. The custom domain `designsystems.engineer` is set via the `CNAME` file

## Project structure

```
src/
├── _data/           # Site metadata, navigation
├── _includes/       # Layouts, components, shortcodes
├── assets/css/      # Tokens, base, layout, typography
├── posts/           # Blog posts
├── frameworks/      # Framework collection
├── references/      # Reference collection
├── index.md         # Homepage
├── about.md
├── start-here.md
└── feed.njk         # RSS feed
```
