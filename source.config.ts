import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

// Enhanced frontmatter schema for Flowxtra documentation
const customFrontmatterSchema = frontmatterSchema.extend({
  icon: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

// Define separate collections for each language
export const docsEn = defineDocs({
  dir: 'content/docs/en',
  docs: {
    schema: customFrontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const docsDe = defineDocs({
  dir: 'content/docs/de',
  docs: {
    schema: customFrontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// For backward compatibility - default to English
export const docs = docsEn;

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
