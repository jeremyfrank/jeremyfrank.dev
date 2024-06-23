import { z, defineCollection } from 'astro:content'

const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).nullable().optional(),
    url: z.string().optional(),
  }),
})

const craftCollection = defineCollection({
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
  }),
})

const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    client: z.string(),
    date: z.date(),
    websiteUrl: z.string().optional(),
    caseStudyUrl: z.string().optional(),
    cardImage: z.string(),
    heroImage: z.string(),
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
