// vendors
import React from 'react';

// components
import MainHeader from '../MainHeader/MainHeader';
import GeneralHead from '../Head/Head';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <GeneralHead />
      <MainHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
