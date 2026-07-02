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
- User asks about the `/docs/` section
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

## Updating docs

When you add routes, APIs, or change behavior:

1. Edit the relevant Markdown file in `content/`
2. If the sidebar needs updating, edit `content/.vitepress/config.ts`
3. Verify locally with `npm run dev`
4. Commit and push **this repo**

## Rules

- Docs are Markdown, not HTML
- Keep agent-facing copy in second person
- Do not commit built output (`content/.vitepress/dist/`)
- Cross-link to `/llms.txt` and `/api/version` when relevant for machine readers
