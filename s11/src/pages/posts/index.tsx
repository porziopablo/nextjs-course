// vendors
import React from 'react';

// components
import AllPosts from '@/features/posts/AllPosts/AllPosts';

// data
import { DUMMY_POSTS } from '..';

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
