// vendors
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// types
import { Post } from '@/types/entities/post';
import { APP_PAGES, PAGE_PATH_VARS } from '@/types/internal/pages';

// helpers
import { formatDate } from '@/helpers/date';

// styles
import classes from './PostItem.module.css';

interface PostItemProps {
  post: Post;
}

export default function PostItem(props: PostItemProps) {
  const { post } = props;

  const date = formatDate(post.date);
  const href = APP_PAGES.POST_DETAIL_SLUG.replace(
    PAGE_PATH_VARS.SLUG,
    post.slug
  );

  return (
    <li className={classes.post}>
      <Link href={href as any}>
        {post.image && (
          <div className={classes.image}>
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              layout="responsive"
            />
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
