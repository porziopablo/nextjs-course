// vendors
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// types
import { Post } from '@/types/entities/Post';

// helpers
import { formatDate } from '@/helpers/date';

// styles
import classes from './PostItem.module.scss';

interface PostItemProps {
  post: Post;
}

export default function PostItem(props: PostItemProps) {
  const { post } = props;
  const date = formatDate(post.date);

  return (
    <li className={classes.post}>
      <Link href="/">
        {post.image && (
          <div className={classes.image}>
            <Image src={post.image} alt={post.title} width={300} height={200} />
          </div>
        )}
        <div className={classes.content}>
          <h3>{post.title}</h3>
          <time>{date}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
