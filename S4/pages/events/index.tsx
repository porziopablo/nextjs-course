// vendors
import React from 'react';
import { useRouter } from 'next/router';

// components
import EventList from '@/components/events/EventList/EventList';
import EventSearch, {
  SearchValues,
} from '@/components/events/EventSearch/EventSearch';

// repositories
import { getAllEvents } from '@/dummy-data';

// types
import { APP_PAGES } from '@/types/internal/pages';

function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function onSearchHandler(values: SearchValues) {
    router.push({
      pathname: APP_PAGES.EVENT_FILTER,
      query: { slug: [values.year, values.month] },
    });
  }

  return (
    <>
      <EventSearch onSearch={onSearchHandler} />
      <EventList events={events} />
    </>
  );
}

export default EventsPage;
