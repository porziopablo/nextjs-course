// vendors
import React from 'react';

// components
import Hero from '@/components/Hero/Hero';
import FeaturedPosts from '@/features/posts/FeaturedPosts/FeaturedPosts';

// types
import { Post } from '@/types/entities/post';

// helpers
import { getFeaturedPosts } from '@/helpers/posts';

interface HomePageProps {
  posts: Post[];
}

export default function HomePage(props: HomePageProps) {
  const { posts } = props;
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getFeaturedPosts();
  return { props: { posts } };
}
