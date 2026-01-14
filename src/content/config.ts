// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Define a collection for our posts
const postsCollection = defineCollection({
  type: 'content', // 'content' for Markdown/MDX files
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

// Export a `collections` object to register our collection(s)
export const collections = {
  'posts': postsCollection,
};
