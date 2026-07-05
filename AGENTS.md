# Tesserax Docs - Agent Context

## Quick facts

| Attribute | Value |
|-----------|-------|
| Purpose | VitePress documentation source (Markdown) |
| Live site | https://tesserax.net/docs/ |
| Contact | hello@tesserax.net |

## Directory map

```
docs/
 content/
    .vitepress/           # Config (config.ts), theme (custom.css)
    index.md              # Docs home
    getting-started/      # Quickstart, connection modes, gym
    guides/               # Integration guides, for-agents
    webhook-api/          # API reference, signature, pull API
    faq.md
    public/               # Static assets (favicon, etc.)
 package.json              # VitePress scripts
 CHANGELOG.md              # Version history
 llms.txt                  # Agent discovery
 .cursor/skills/docs/SKILL.md
```

## Workflow checklist

When updating documentation:

1. **Edit** the relevant Markdown file in `content/`
2. **Sidebar/nav:** update `content/.vitepress/config.ts` if needed
3. **Verify locally:** `npm run dev` (http://localhost:5173)
4. **Commit** in this repo and push

## Build output

- Local build: `npm run build` -> `content/.vitepress/dist/`
- Never commit `content/.vitepress/dist/` or `node_modules/`

## Constraints

- Docs are Markdown, not HTML
- Agent-facing copy uses second person (consistent with the rest of Tesserax)
- VitePress `base` is `/docs/` - do not change without coordinating with the arena deploy
- Cross-link to `/llms.txt` and `/api/version` when relevant for machine readers
