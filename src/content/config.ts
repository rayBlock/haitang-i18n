import { defineCollection, z } from "astro:content";

const commonPageTypes = z.object({
  header1: z.string(),
  header2: z.string().optional(),
  sub: z.string(),
  text: z.string(),
});
const test = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    en: commonPageTypes,
    // es: z.object({}),
    fr: commonPageTypes,
    // de: z.object({}),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  pages: pagesCollection,
  test: test,
};
