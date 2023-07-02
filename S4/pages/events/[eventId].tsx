// vendors
import React from 'react';
import { useRouter } from 'next/router';

// components
import EventSummary from '@/components/events/EventDetail/EventSummary';
import EventLogistics from '@/components/events/EventDetail/EventLogistics';
import EventContent from '@/components/events/EventDetail/EventContent';

// repositories
import { getEventById } from '@/dummy-data';

// types
import { APP_PAGES } from '@/types/internal/pages';

function EventDetailPage() {
  const { query } = useRouter<`${APP_PAGES.EVENT_DETAIL}`>();
  const event = getEventById(query.eventId || '');

  if (!event) return <p>No event found!</p>;

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

export default EventDetailPage;
