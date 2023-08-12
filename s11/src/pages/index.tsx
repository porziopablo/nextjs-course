// vendors
import React from 'react';

// components
import Hero from '@/components/Hero/Hero';
import FeaturedPosts from '@/features/posts/FeaturedPosts/FeaturedPosts';

// types
import { Post } from '@/types/entities/Post';

export const DUMMY_POSTS: Post[] = [
  {
    slug: 'getting-started-with-nextjs-1',
    title: 'Getting Started with NextJS - Part 1',
    image: '/images/posts/getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
    content: '# This is a first post',
  },
  {
    slug: 'getting-started-with-nextjs-2',
    title: 'Getting Started with NextJS - Part 2',
    image: '/images/posts/getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
    content: '# This is a second post',
  },
  {
    slug: 'getting-started-with-nextjs-3',
    title: 'Getting Started with NextJS - Part 3',
    image: '/images/posts/getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
    content: '# This is a third post',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
