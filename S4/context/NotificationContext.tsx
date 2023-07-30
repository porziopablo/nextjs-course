import React, { createContext, useState, useContext } from 'react';

export enum NotificationStatus {
  Success = 'success',
  Error = 'error',
  Pending = 'pending',
}

interface Notification {
  title: string;
  message: string;
  status: NotificationStatus;
}

interface NotificationContextData {
  notification?: Notification;
  showNotification: (notification: Notification) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContextData>({
  showNotification: () => {},
  hideNotification: () => {},
});

interface NotificationProviderProps {
  children: React.ReactNode;
}

export function NotificationContextProvider(props: NotificationProviderProps) {
  const [activeNotification, setActiveNotification] = useState<Notification>();

  function showNotification(notification: Notification) {
    setActiveNotification(notification);
  }

  function hideNotification() {
    setActiveNotification(undefined);
  }

  const context: NotificationContextData = {
    notification: activeNotification,
    showNotification,
    hideNotification,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default function useNotificationContext() {
  return useContext(NotificationContext);
}
