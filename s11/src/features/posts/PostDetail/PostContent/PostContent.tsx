// vendors
import React from 'react';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {
  ReactMarkdown,
  ReactMarkdownOptions,
} from 'react-markdown/lib/react-markdown';

// components
import PostHeader from '../PostHeader/PostHeader';

// types
import { Post } from '@/types/entities/post';

// styles
import classes from './PostContent.module.css';

const components: ReactMarkdownOptions['components'] = {
  img(image) {
    return (
      <Image
        src={image.src || ''}
        alt={image.alt || ''}
        width={600}
        height={300}
      />
    );
  },
  code(code) {
    const { className, children } = code;
    const language = className?.split('-')[1];
    return (
      <SyntaxHighlighter
        style={atomDark}
        language={language}
        children={children as any}
      />
    );
  },
};

interface PostContentProps {
  post: Post;
}

export default function PostContent(props: PostContentProps) {
  const { post } = props;

  return (
    <article className={classes.content}>
      <PostHeader data={post} />
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </article>
  );
}
