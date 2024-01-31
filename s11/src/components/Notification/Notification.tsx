// vendors
import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';

// hooks
import useNotificationContext, {
  NotificationStatus,
} from '@/context/NotificationContext';

// constants
import { NOTIFICATIONS_ROOT_ID } from '@/pages/_document';

// styles
import classes from './Notification.module.css';

interface NotificationProps {
  title: string;
  message: string;
  status: NotificationStatus;
}

function Notification(props: NotificationProps) {
  const { title, message, status } = props;
  const { hideNotification } = useNotificationContext();

  function getClasses() {
    let statusClasses = '';
    switch (status) {
      case NotificationStatus.Success:
        statusClasses = classes.success;
        break;
      case NotificationStatus.Error:
        statusClasses = classes.error;
        break;
      default:
        break;
    }

    return `${classes.notification} ${statusClasses}`;
  }

  const className = useMemo(getClasses, [status, classes]);

  return ReactDOM.createPortal(
    <div className={className} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById(NOTIFICATIONS_ROOT_ID) as HTMLElement
  );
}

export default Notification;
