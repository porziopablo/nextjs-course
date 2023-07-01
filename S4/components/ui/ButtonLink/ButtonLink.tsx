// vendors
import React from 'react';
import Link from 'next/link';

// styles
import classes from './ButtonLink.module.css';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
}

function ButtonLink(props: ButtonLinkProps) {
  const { href, children } = props;

  return (
    <Link className={classes.btn} href={href}>
      {children}
    </Link>
  );
}

export default ButtonLink;
