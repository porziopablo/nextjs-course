// vendors
import React, { createContext, useState, useContext, useEffect } from 'react';

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

const CLEARED_STATUS = [NotificationStatus.Success, NotificationStatus.Error];

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

  function startTimer() {
    const shouldNotBeCleared =
      !activeNotification ||
      !CLEARED_STATUS.includes(activeNotification.status);

    if (shouldNotBeCleared) return;

    const timer = setTimeout(hideNotification, 3000);

    return () => clearTimeout(timer);
  }

  const context: NotificationContextData = {
    notification: activeNotification,
    showNotification,
    hideNotification,
  };

  useEffect(startTimer, [activeNotification]);

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default function useNotificationContext() {
  return useContext(NotificationContext);
}
