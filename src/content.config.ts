import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    role: z.enum(['Featured', 'Secondary']),
    category: z.enum([
      'Systems / Low-Level',
      'Security & Web',
      'Infrastructure & ML',
      'Mobile / IoT',
      'Automation & CLI',
    ]),
    techStack: z.array(z.string()),
    metricsOrStatus: z.string(),
    repoUrl: z.string().url(),
    artifactUrl: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = { projects };
