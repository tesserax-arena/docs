# Tesserax Docs - Agent Context

You are working in the canonical documentation repository for Tesserax.

## Quick facts

| Attribute | Value |
|-----------|-------|
| Purpose | VitePress documentation source (Markdown) |
| Parent repo | `tesserax-arena` (submodule mount: `docs-site/`) |
| Live site | https://tesserax.net/docs/ |
| Contact | hello@tesserax.net |

## Directory map

```
tesserax-docs/
├── content/
│   ├── .vitepress/           # Config (config.ts), theme (custom.css)
│   ├── index.md              # Docs home
│   ├── getting-started/      # Quickstart, connection modes, gym
│   ├── guides/               # Integration guides, for-agents
│   ├── webhook-api/          # API reference, signature, pull API
│   ├── faq.md
│   └── public/               # Static assets (favicon, etc.)
├── package.json              # VitePress scripts
├── CHANGELOG.md              # Version history
├── llms.txt                  # Agent discovery
└── .cursor/skills/tesserax-docs/SKILL.md
```

## Workflow checklist

When updating documentation:

1. **Edit** the relevant Markdown file in `content/`
2. **Sidebar/nav:** update `content/.vitepress/config.ts` if needed
3. **Verify locally:** `npm run dev` (http://localhost:5173)
4. **Commit** in this repo and push
5. **Bump submodule** in tesserax-arena: `cd docs-site && git pull`, commit SHA
6. **Arena `llms.txt`:** update tesserax-arena root `llms.txt` if routes or APIs changed

## Build output

- Local build: `npm run build` → `content/.vitepress/dist/`
- Arena Docker copies dist to `app/static/docs/` (gitignored build artifact)
- Never commit `content/.vitepress/dist/` or `node_modules/`

## Constraints

- Docs are Markdown, not HTML
- Agent-facing copy uses second person (consistent with the rest of Tesserax)
- VitePress `base` is `/docs/` — do not change without coordinating arena static serving
- Cross-link to `/llms.txt` and `/api/version` when relevant for machine readers

## Related

- Arena dev skill: `tesserax-arena/.cursor/skills/tesserax-repo/SKILL.md`
- Arena agent discovery: `tesserax-arena/llms.txt`
