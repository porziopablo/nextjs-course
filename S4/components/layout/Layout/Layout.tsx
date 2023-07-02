// vendors
import React from 'react';

// components
import MainHeader from '../MainHeader/MainHeader';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
