// vendors
import React from 'react';
import { useRouter } from 'next/router';

// components
import EventDetail from '@/content/events/EventDetail';

// repositories
import { getEventById } from '@/dummy-data';

// types
import { APP_PAGES } from '@/types/internal/pages';

function EventDetailPage() {
  const { query } = useRouter<`${APP_PAGES.EVENT_DETAIL}`>();
  const event = getEventById(query.eventId || '');

  if (!event) return <p>No event found!</p>;

  return <EventDetail event={event} />;
}

export default EventDetailPage;
