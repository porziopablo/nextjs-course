// vendors
import React from 'react';

// styles
import classes from './EventSummary.module.css';

interface EventSummaryProps {
  title: string;
}

function EventSummary(props: EventSummaryProps) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
