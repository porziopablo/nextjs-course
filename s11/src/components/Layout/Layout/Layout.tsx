// vendors
import React from 'react';

// components
import Notification from '@/components/Notification/Notification';
import MainNavigation from '../MainNavigation/MainNavigation';
import GeneralHead from '../Head/Head';

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
      <GeneralHead />
      <MainNavigation />
      <main>{children}</main>
      {notification && <Notification {...notification} />}
    </>
  );
}
