// vendors
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// types
import { Post } from '@/types/entities/Post';

const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * It retrieves the post data from the file system based on the identifier.
 * @param identifier either the slug or the file name of the post
 * @returns the post data
 */
export function getPostData(identifier: string): Post {
  const slug = identifier.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContent);

  return { ...data, content, slug } as Post;
}

export function getAllPostsFilenames(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts(): Post[] {
  const fileNames = getAllPostsFilenames();
  const allPosts = fileNames.map(getPostData);
  allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return allPosts;
}

export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
