// vendors
import React from 'react';
import { GetServerSidePropsContext } from 'nextjs-routes';

// components
import PostContent from '@/features/posts/PostDetail/PostContent/PostContent';
import { PageHead } from '@/components/Layout/Head/Head';

// types
import { APP_PAGES } from '@/interfaces/internal/pages';
import { Post } from '@/interfaces/entities/post';

// helpers
import { getAllPostsFilenames, getPostData } from '@/helpers/posts';

interface PostDetailPageProps {
  post: Post;
}

export default function PostDetailPage(props: PostDetailPageProps) {
  const { post } = props;
  return (
    <>
      <PageHead title={post.title} description={post.excerpt} />
      <PostContent post={post} />
    </>
  );
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
