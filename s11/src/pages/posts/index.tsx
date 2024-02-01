// vendors
import React from 'react';

// components
import AllPosts from '@/features/posts/AllPosts/AllPosts';
import { PageHead } from '@/components/Layout/Head/Head';

// helpers
import { getAllPosts } from '@/helpers/posts';

// types
import { Post } from '@/interfaces/entities/post';

interface AllPostsPageProps {
  posts: Post[];
}

export default function AllPostsPage(props: AllPostsPageProps) {
  const { posts } = props;
  return (
    <>
      <PageHead
        title="All Posts"
        description="A list of all programming-related tutorials and posts!"
      />
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
