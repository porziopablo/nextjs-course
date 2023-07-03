// vendors
import React from 'react';

// styles
import classes from './ErrorAlert.module.css';

interface ErrorAlertProps {
  children: React.ReactNode;
}

function ErrorAlert(props: ErrorAlertProps) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
