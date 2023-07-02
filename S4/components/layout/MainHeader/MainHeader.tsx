// vendors
import React from 'react';
import Link from 'next/link';

// types
import { APP_PAGES } from '@/types/internal/pages';

// styles
import classes from './MainHeader.module.css';

interface NavigationItem {
  title: string;
  link: string;
}

const navigationItems: NavigationItem[] = [
  { title: 'All Events', link: APP_PAGES.EVENTS },
];

function renderNavigationItems(item: NavigationItem) {
  return (
    <Link key={item.link} href={item.link as any}>
      {item.title}
    </Link>
  );
}

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={APP_PAGES.HOME}>NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>{navigationItems.map(renderNavigationItems)}</ul>
      </nav>
    </header>
  );
}

export default MainHeader;
