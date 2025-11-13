// jankraus 
// https://jankraus.net/2024/04/05/how-to-build-a-simple-photo-gallery-with-astro/

import { defineCollection, z } from "Astro:content";

const albums = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      cover: image(),
    }),
});

export const collections = {
  albums,
};