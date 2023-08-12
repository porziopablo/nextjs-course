// vendors
import React from 'react';

// components
import PostsGrid from '../PostsGrid/PostsGrid';

// types
import { Post } from '@/types/entities/post';

// styles
import classes from './FeaturedPosts.module.css';

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts(props: FeaturedPostsProps) {
  const { posts = [] } = props;

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
