import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/BlogPosts",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

const art = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/ArtPosts",
    }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()).optional(),
        image: image().optional(),
        medium: z.string().optional(),
    }),
});

export const collections = { blog, art };