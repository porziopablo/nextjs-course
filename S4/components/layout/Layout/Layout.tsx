// vendors
import React from 'react';

// components
import MainHeader from '../MainHeader/MainHeader';
import GeneralHead from '../Head/Head';
import Notification from '@/components/ui/Notification/Notification';

// hooks
import useNotificationContext from '@/context/NotificationContext';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;
  const { notification } = useNotificationContext();

  return (
    <>
      <GeneralHead />
      <MainHeader />
      <main>{children}</main>
      {notification && <Notification {...notification} />}
    </>
  );
}

export default Layout;
