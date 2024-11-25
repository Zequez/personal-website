import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      thumbnail: image(),
      thumbnailAlt: z.string().optional(),
    }),
});

const portfolio = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      liveLink: z.string().nullable(),
      repoLink: z.string().nullable(),
      when: z.enum(["short-time", "mid-time", "long-time"]),
      media: z.array(image()),
      mediaAlt: z.array(z.string()).optional(),
      tags: z.array(z.string()),
      status: z.string(),
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

export const collections = { blog, portfolio };
