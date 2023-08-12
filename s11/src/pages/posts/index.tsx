// vendors
import React from 'react';

// components
import AllPosts from '@/features/posts/AllPosts/AllPosts';

// helpers
import { getAllPosts } from '@/helpers/posts';

// types
import { Post } from '@/types/entities/Post';

interface AllPostsPageProps {
  posts: Post[];
}

export default function AllPostsPage(props: AllPostsPageProps) {
  const { posts } = props;
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
