// vendors
import React from 'react';

// components
import Notification from '@/components/Notification/Notification';
import MainNavigation from '../MainNavigation/MainNavigation';

// hooks
import useNotificationContext from '@/context/NotificationContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const { notification } = useNotificationContext();

  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      {notification && <Notification {...notification} />}
    </>
  );
}
