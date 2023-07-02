// vendors
import React from 'react';
import Link, { LinkProps } from 'next/link';

// styles
import classes from './ButtonLink.module.css';

interface ButtonLinkProps extends LinkProps {
  href: any;
}

function ButtonLink(props: ButtonLinkProps) {
  const { children, ...rest } = props;

  return (
    <Link className={classes.btn} {...rest}>
      {children}
    </Link>
  );
}

export default ButtonLink;
