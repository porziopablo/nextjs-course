// vendors
import React from 'react';

// styles
import classes from './EventContent.module.css';

interface EventContentProps {
  children: React.ReactNode;
}

function EventContent(props: EventContentProps) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
