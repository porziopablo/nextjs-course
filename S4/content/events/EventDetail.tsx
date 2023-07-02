// vendors
import React from 'react';

// components
import EventSummary from '@/components/events/EventDetail/EventSummary';
import EventLogistics from '@/components/events/EventDetail/EventLogistics';
import EventContent from '@/components/events/EventDetail/EventContent';

// types
import { Event } from '@/types/entities/events';

interface EventDetailProps {
  event: Event;
}

function EventDetail(props: EventDetailProps) {
  const { event } = props;

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        data={{
          date: event.date,
          address: event.location,
          image: event.image,
          imageAlt: event.title,
        }}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetail;
