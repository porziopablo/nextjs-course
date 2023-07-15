// vendors
import React from 'react';
import Head from 'next/head';

const TITLE = 'NextJS Events';
const DESCRIPTION = 'Find a lot of great events that allow you to evolve...';

export default function GeneralHead() {
  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

interface PageHeadProps {
  title?: string;
  description?: string;
}

export function PageHead({ title, description }: PageHeadProps) {
  return (
    <Head>
      <title>{title || TITLE}</title>
      <meta name="description" content={description || DESCRIPTION} />
    </Head>
  );
}
