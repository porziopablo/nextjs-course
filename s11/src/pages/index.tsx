// vendors
import React from 'react';

// components
import Hero from '@/components/Hero/Hero';
import FeaturedPosts from '@/features/posts/FeaturedPosts/FeaturedPosts';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
