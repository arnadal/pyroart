import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'src/posts');

export function getPost(slug) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch {
    return false;
  }
  const { data, content } = matter(fileContents);
  const processedContent = remark().use(html).processSync(content);
  const contentHtml = processedContent.toString();

  return { ...data, slug, contentHtml };
}

export function getAllSlugs() {
  return fs.readdirSync(postsDir).filter(file => file.endsWith('.md')).map(file => file.replace(/\.md$/, ''));
}