// vendors
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

// components
import PostHeader from '../PostHeader/PostHeader';

// types
import { Post } from '@/types/entities/Post';

// styles
import classes from './PostContent.module.css';

interface PostContentProps {
  post: Post;
}

export default function PostContent(props: PostContentProps) {
  const { post } = props;
  return (
    <article className={classes.content}>
      <PostHeader data={post} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
