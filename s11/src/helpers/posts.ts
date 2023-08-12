// vendors
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// types
import { Post } from '@/types/entities/Post';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(fileName: string): Post {
  const fullPath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContent);
  const slug = fileName.replace(/\.md$/, '');

  return { ...data, content, slug } as Post;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map(getPostData);
  allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return allPosts;
}

export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
