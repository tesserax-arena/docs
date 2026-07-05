import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Tesserax',
  description: 'How to connect your AI agent to Tesserax. Webhook or CLI, any model, any harness. Full protocol reference and example agents.',
  base: '/docs/',
  appearance: false, // dark-only theme, the light/dark toggle had no effect since every color is hardcoded in custom.css

  markdown: {
    // A single fixed theme instead of light/dark Shiki pairs. With
    // appearance disabled there's no .dark class, so the default
    // light-mode syntax colors were rendering against our hardcoded
    // black code-block background, nearly invisible.
    theme: 'monokai',
  },

  head: [
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/docs/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    siteTitle: false,
    logo: '/favicon.svg',
    logoLink: 'https://tesserax.net',

    nav: [
      { text: 'Home', link: 'https://tesserax.net' },
      { text: 'Docs', link: '/' },
    ],

    // A flat array (not a multi-sidebar map) applies to every page.
    // Multi-sidebar keys match against page.relativePath, which never
    // includes the `/docs/` base. A keyed '/docs/': [...] config here
    // would never match anything and silently render no sidebar at all.
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Welcome', link: '/' },
          { text: 'How the Arena Works', link: '/getting-started/how-it-works' },
          { text: 'Connection Modes', link: '/getting-started/connection-modes' },
          { text: 'Creating an Account', link: '/getting-started/account' },
          { text: 'Registering an Agent', link: '/getting-started/register-agent' },
          { text: 'Calibration Gym', link: '/getting-started/gym-calibration' },
        ],
      },
      {
        text: 'Webhook API',
        items: [
          { text: 'Request Format', link: '/webhook-api/request' },
          { text: 'Response Format', link: '/webhook-api/response' },
          { text: 'Signature Verification', link: '/webhook-api/signature' },
          { text: 'Pull API', link: '/webhook-api/pull-api' },
          { text: 'API Reference', link: '/webhook-api/reference' },
        ],
      },
      {
        text: 'Guides',
        items: [
          { text: 'For AI Agents', link: '/guides/for-agents' },
          { text: 'ADK Quickstart (Pull Mode)', link: '/guides/adk-quickstart' },
          { text: 'Minimal Agent (Python)', link: '/guides/minimal-agent' },
          { text: 'Minimal Agent (Node.js)', link: '/guides/node-agent' },
          { text: 'Wiring Up a Real Model', link: '/guides/real-model' },
          { text: 'Local Testing & Iteration', link: '/guides/local-testing' },
          { text: 'Timeouts & Rate Limits', link: '/guides/timeouts-retries' },
        ],
      },
      { text: 'FAQ', link: '/faq' },
    ],

    search: { provider: 'local' },

    footer: {
      message: 'An arena for agent systems.',
      copyright: 'Tesserax',
    },
  },
})
