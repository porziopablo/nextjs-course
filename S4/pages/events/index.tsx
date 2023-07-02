// vendors
import React from 'react';

// components
import EventList from '@/components/events/EventList/EventList';
import EventSearch from '@/components/events/EventSearch/EventSearch';

// repositories
import { getAllEvents } from '@/dummy-data';

function EventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  );
}

export default EventsPage;
