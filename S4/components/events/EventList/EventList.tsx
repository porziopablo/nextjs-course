// vendors
import React from 'react';

// types
import { Event } from '@/types/entities/events';

// components
import EventItem from '../EventItem/EventItem';

// styles
import classes from './EventList.module.css';

interface EventListProps {
  events: Event[];
}

function EventList(props: EventListProps) {
  const { events = [] } = props;

  function renderEvent(event: Event) {
    return <EventItem key={event.id} event={event} />;
  }

  return <ul className={classes.list}>{events.map(renderEvent)}</ul>;
}

export default EventList;
