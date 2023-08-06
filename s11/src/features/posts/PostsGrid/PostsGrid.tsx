// vendors
import React from 'react';

// components
import PostItem from '@/features/posts/PostItem/PostItem';

// types
import { Post } from '@/types/entities/Post';

// styles
import classes from './PostsGrid.module.css';

interface PostsGridPosts {
  posts: Post[];
}

export default function PostsGrid(props: PostsGridPosts) {
  const { posts = [] } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
