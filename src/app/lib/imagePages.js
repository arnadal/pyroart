import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const imagesDir = path.join(process.cwd(), 'src/posts');

export function getAllImageSlugs() {
  return fs.readdirSync(imagesDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

export function getImagePost(slug) {
  const fullPath = path.join(imagesDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = remark().use(html).processSync(content);
  const contentHtml = processedContent.toString();

  return { ...data, slug, contentHtml };
}
