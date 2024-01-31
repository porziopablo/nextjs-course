// vendors
import React from 'react';
import Head from 'next/head';

export default function GeneralHead() {
  return (
    <Head>
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
      {!!title && <title>{title}</title>}
      {!!description && <meta name="description" content={description} />}
    </Head>
  );
}
