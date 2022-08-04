import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true
  },
  integrations: [
    astroImageTools,
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: false
    }
  }
});
