// vendors
import React from 'react';

// components
import Hero from '@/components/Hero/Hero';
import FeaturedPosts from '@/features/posts/FeaturedPosts/FeaturedPosts';
import { PageHead } from '@/components/Layout/Head/Head';

// types
import { Post } from '@/interfaces/entities/post';

// helpers
import { getFeaturedPosts } from '@/helpers/posts';

interface HomePageProps {
  posts: Post[];
}

export default function HomePage(props: HomePageProps) {
  const { posts } = props;
  return (
    <>
      <PageHead
        title="Pablo's Blog"
        description="I post about programming and web development"
      />
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getFeaturedPosts();
  return { props: { posts } };
}
