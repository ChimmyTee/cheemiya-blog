import { z, defineCollection } from 'astro:content';

const showsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        author: z.string(),
        date: z.string(),
        image: z.string(),
        title: z.string(),
    })
})

export const collections = {
    'shows': showsCollection,
}