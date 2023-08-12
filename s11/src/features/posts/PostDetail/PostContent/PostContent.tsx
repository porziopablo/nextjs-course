// vendors
import React from 'react';

// components
import PostHeader from '../PostHeader/PostHeader';

// styles
import classes from './PostContent.module.css';

import { DUMMY_POSTS } from '@/pages';

const post = DUMMY_POSTS[0];

export default function PostContent() {
  return (
    <article className={classes.content}>
      <PostHeader data={post} />
      <p>{post.content}</p>
    </article>
  );
}
