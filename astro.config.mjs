import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
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
