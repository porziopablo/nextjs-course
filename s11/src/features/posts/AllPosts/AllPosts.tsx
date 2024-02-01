// vendors
import React from 'react';

// components
import PostsGrid from '../PostsGrid/PostsGrid';

// types
import { Post } from '@/interfaces/entities/post';

// styles
import classes from './AllPosts.module.css';

interface AllPostsProps {
  posts: Post[];
}

export default function AllPosts(props: AllPostsProps) {
  const { posts = [] } = props;

  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
