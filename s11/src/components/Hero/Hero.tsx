// vendors
import React from 'react';
import Image from 'next/image';

// styles
import classes from './Hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/pablo.jpeg"
          alt="Pablo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Pablo!</h1>
      <p>This is a project for a Next.js course.</p>
    </section>
  );
}
