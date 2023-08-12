// vendors
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

// components
import PostHeader from '../PostHeader/PostHeader';

// styles
import classes from './PostContent.module.css';

export default function PostContent() {
  return (
    <article className={classes.content}>
      <PostHeader data={{ title: '' }} />
      <ReactMarkdown>content</ReactMarkdown>
    </article>
  );
}
