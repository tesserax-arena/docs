---
name: tesserax-docs
description: >-
  Work on the Tesserax documentation site -- VitePress source, adding pages,
  editing guides, or rebuilding docs for production. Use when modifying docs,
  API docs, integration guides, or the /docs section.
---

# Tesserax Docs Site

Read `AGENTS.md` in this repo first.

## When to use

- User wants to add or edit documentation pages
- User asks about the `docs-site/` submodule or `/docs/` section
- Updating integration guides, API reference, or agent-facing docs

## Structure

```
content/
  .vitepress/           # VitePress config, theme
  index.md              # Docs home
  getting-started/      # Quickstart, connection modes
  guides/               # Integration guides, for-agents
  webhook-api/          # API reference, signature docs, pull API
  faq.md                # Frequently asked questions
  public/               # Static assets for docs
package.json            # VitePress dependency
```

## Local dev (docs only)

```bash
npm install                     # one-time
npm run dev                     # hot-reload at http://localhost:5173
```

## Production build

Docs are built inside the tesserax-arena Docker image during deploy. To rebuild manually:

```bash
npm ci && npm run build
# Output: content/.vitepress/dist/
# Arena Docker copies this to app/static/docs/
```

## Updating docs

When you add routes, APIs, or change behavior:

1. Edit the relevant Markdown file in `content/`
2. If the sidebar needs updating, edit `content/.vitepress/config.ts`
3. Verify locally with `npm run dev`
4. Commit and push **this repo**
5. In **tesserax-arena**: bump submodule pointer
6. Also update `llms.txt` at tesserax-arena root if APIs or routes changed

## Bump submodule in arena

```bash
cd docs-site && git pull && cd ..
git add docs-site
git commit -m "Bump docs-site submodule"
```

## Rules

- Docs are Markdown, not HTML
- Keep agent-facing copy in second person
- Do not commit built output (`content/.vitepress/dist/`)
- Cross-link to `/llms.txt` and `/api/version` when relevant for machine readers

## Related

- [tesserax-repo](../../tesserax-arena/.cursor/skills/tesserax-repo/SKILL.md) - arena development (when working from parent repo)
