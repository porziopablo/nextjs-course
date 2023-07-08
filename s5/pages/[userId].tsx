// vendors
import React from 'react';
import { GetServerSidePropsContext } from 'nextjs-routes';

// types
import { APP_PAGES } from '@/types/internal/pages';

interface userIdPageProps {
  userId: string;
}

export default function userIdPage({ userId }: userIdPageProps) {
  return <h1>{userId}</h1>;
}

type Context = GetServerSidePropsContext<`${APP_PAGES.PRODUCT_DETAIL}`>;

export async function getServerSideProps({ params }: Context) {
  const { userId } = params;

  return { props: { userId } };
}
