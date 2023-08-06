// vendors
import React from 'react';

// components
import MainNavigation from '../MainNavigation/MainNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
