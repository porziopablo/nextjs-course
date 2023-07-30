// vendors
import React, { useMemo } from 'react';

// types
import { NotificationStatus } from '@/context/NotificationContext';

// styles
import classes from './Notification.module.css';

interface NotificationProps {
  title: string;
  message: string;
  status: NotificationStatus;
}

function Notification(props: NotificationProps) {
  const { title, message, status } = props;

  function getClassByStatus() {
    let statusClasses = '';

    switch (status) {
      case NotificationStatus.Success:
        statusClasses = classes.success;
        break;
      case NotificationStatus.Error:
        statusClasses = classes.error;
        break;
      case NotificationStatus.Pending:
        statusClasses = classes.pending;
        break;
      default:
        break;
    }

    return `${classes.notification} ${statusClasses}`;
  }

  const activeClasses = useMemo(getClassByStatus, [status, classes]);

  return (
    <div className={activeClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
