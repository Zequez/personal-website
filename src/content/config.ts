import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    liveLink: z.string().optional(),
    repoLink: z.string().optional(),
    order: z.number(),
    when: z.string(),
    time: z.string(),
    thumbnail: z.string(),
    media: z.array(z.string()),
    tags: z.array(z.string()),
    enthusiasm: z.string(),
  }),
});

// const jobs = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     where: z.string(),
//     link: z.string().optional(),
//     time: z.string(),
//     when: z.string(),
//     relation: z.string(),
//     tech: z.array(z.string()),
//   }),
// });

export const collections = { blog };
