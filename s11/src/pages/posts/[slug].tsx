// vendors
import React from 'react';
import { GetServerSidePropsContext } from 'nextjs-routes';

// components
import PostContent from '@/features/posts/PostDetail/PostContent/PostContent';

// types
import { APP_PAGES } from '@/types/internal/pages';
import { Post } from '@/types/entities/Post';

// helpers
import { getAllPostsFilenames, getPostData } from '@/helpers/posts';

interface PostDetailPageProps {
  post: Post;
}

export default function PostDetailPage(props: PostDetailPageProps) {
  const { post } = props;
  return <PostContent post={post} />;
}

type Context = GetServerSidePropsContext<`${APP_PAGES.POST_DETAIL_SLUG}`>;

export function getStaticProps(context: Context) {
  const { params } = context;
  const { slug } = params;
  const post = getPostData(slug);

  return { props: { post }, revalidate: 600 };
}

export function getStaticPaths() {
  const paths = getAllPostsFilenames().map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
}
