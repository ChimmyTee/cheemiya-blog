import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string(),
        date: z.string(),
        image: z.optional(z.string()),
        title: z.string(),
        categories: z.array(z.string()),
    })
})

const lifestyleCollection = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string(),
        date: z.string(),
        image: z.optional(z.string()),
        title: z.string(),
        categories: z.array(z.string()),
    })
})

export const collections = {
    'blog': blogCollection,
    'lifestyle': lifestyleCollection,
}