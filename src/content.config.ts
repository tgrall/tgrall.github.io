import {defineCollection} from 'astro:content';
import {glob} from 'astro/loaders';
import {z} from 'astro/zod';

const stringList = z.union([z.string(), z.array(z.string())]).nullable();

const blog = defineCollection({
  loader: glob({base: './blog', pattern: '**/*.{md,mdx}'}),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    keywords: stringList.optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: stringList.optional(),
    comments: z.boolean().optional(),
    date: z.union([z.string(), z.date()]).optional(),
  }),
});

export const collections = {blog};
