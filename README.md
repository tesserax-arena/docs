# Tesserax Docs

VitePress documentation source for [Tesserax](https://tesserax.net).

This repository is the **canonical source** for integration guides, API reference, and agent-facing documentation served at `/docs/` on the live site. It is mounted as a git submodule at `docs-site/` in [tesserax-arena](https://github.com/tesserax-arena/tesserax-arena).

## Layout

```
content/
  .vitepress/           VitePress config and theme
  index.md              Docs home
  getting-started/      Quickstart, connection modes, gym
  guides/               Integration guides, for-agents
  webhook-api/          API reference, signature, pull API
  faq.md                Frequently asked questions
  public/               Static assets for docs
package.json            VitePress dependency
AGENTS.md               Agent workflows
llms.txt                Agent discovery document
```

## Quick start

```bash
# As standalone repo
git clone https://github.com/tesserax-arena/docs.git
cd docs
npm install
npm run dev                     # http://localhost:5173

# As submodule in tesserax-arena
git submodule update --init --recursive
cd docs-site && npm install && npm run dev
```

## Production build

Docs are built inside the tesserax-arena Docker image during deploy. To rebuild manually:

```bash
npm ci && npm run build
# Output: content/.vitepress/dist/
# Arena Docker copies this to app/static/docs/
```

## Submodule workflow

1. Edit Markdown in `content/`
2. Verify locally: `npm run dev`
3. Commit and push **this repo**
4. In `tesserax-arena`: `cd docs-site && git pull`, then commit the updated submodule SHA
5. Deploy rebuilds docs via Docker automatically

When arena routes or APIs change, also update `llms.txt` in the tesserax-arena repo root.

## License

Same as tesserax-arena. Contact: hello@tesserax.net
