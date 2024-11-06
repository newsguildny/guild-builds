import { defineCollection, z } from "astro:content";

const recipeCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    ingredients: z.array(z.string()),
    img: z.string(),
  }),
});

// Export a single `collections` object to register collections
// This key should match the collection directory name in "src/content"
export const collections = {
  recipes: recipeCollection,
};
