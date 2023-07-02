// vendors
import React from 'react';

// styles
import classes from './LogisticsItem.module.css';

interface LogisticsItemProps {
  children: React.ReactNode;
  icon: JSX.Element;
}

function LogisticsItem(props: LogisticsItemProps) {
  const { icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
