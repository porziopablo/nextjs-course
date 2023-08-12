// vendors
import React from 'react';
import Image from 'next/image';

// styles
import classes from './PostHeader.module.css';

interface PostHeaderProps {
  data: {
    title: string;
    image?: string;
  };
}

export default function PostHeader(props: PostHeaderProps) {
  const { data } = props;
  return (
    <header className={classes.header}>
      <h1>{data.title}</h1>
      {data.image && (
        <Image src={data.image} alt={data.title} width={200} height={150} />
      )}
    </header>
  );
}
