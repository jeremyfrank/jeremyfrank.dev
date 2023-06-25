import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  compilerOptions: {
    types: ["@astrojs/image/client"]
  },
  integrations: [
    image(),
    mdx(),
    tailwind({
      applyBaseStyles: false
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false
    }
  },
  site: 'https://jeremyfrank.dev/',
  vite: {
    server: {
      open: '/index.html'
    }
  }
});
