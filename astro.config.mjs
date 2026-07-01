import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  // Preserve Astro 6 whitespace handling following HTML rules, while still compressing HTML output
  // https://docs.astro.build/en/guides/upgrade-to/v7/#new-default-whitespace-handling-compresshtml-jsx
  compressHTML: true,
  image: {
    domains: ['ucarecdn.com'],
  },
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false,
    },
  },
  prefetch: true,
  site: 'https://jeremyfrank.dev/',
})
