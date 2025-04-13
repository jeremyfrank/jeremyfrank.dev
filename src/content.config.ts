import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const articlesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).nullable().optional(),
    url: z.string().optional(),
  }),
})

const craftCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/craft' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    componentUrl: z.string().optional(),
    preview: z.object({
      src: z.string(),
      poster: z.string().optional(),
      width: z.number(),
      height: z.number(),
    }),
    socialImage: z.string().optional(),
  }),
})

const workCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    date: z.date(),
    websiteUrl: z.string().optional(),
    caseStudyUrl: z.string().optional(),
    cardImage: z.string(),
    heroImage: z.string(),
    socialImage: z.string().optional(),
    singleDeviceHero: z.boolean().default(false),
    color: z.string(),
    role: z.union([z.string(), z.array(z.string())]),
    tech: z.union([z.string(), z.array(z.string())]),
    summary: z.string().optional(),
    featured: z.boolean().default(false),
  }),
})

export const collections = {
  articles: articlesCollection,
  craft: craftCollection,
  work: workCollection,
}
