// vendors
import React from 'react';
import Link from 'next/link';

// types
import { APP_PAGES } from '@/interfaces/internal/pages';

// components
import Logo from '../Logo/Logo';

// styles
import classes from './MainNavigation.module.css';

interface PageLink {
  href: string;
  label: string;
}

const LINKS: PageLink[] = [
  { href: APP_PAGES.POSTS, label: 'Posts' },
  { href: APP_PAGES.CONTACT, label: 'Contact' },
];

function renderLink(link: PageLink) {
  return (
    <li key={link.href}>
      <Link href={link.href as any}>{link.label}</Link>
    </li>
  );
}

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href={APP_PAGES.HOME}>
        <Logo />
      </Link>
      <nav>
        <ul>{LINKS.map(renderLink)}</ul>
      </nav>
    </header>
  );
}
