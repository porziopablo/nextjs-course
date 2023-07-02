// vendors
import React from 'react';

// components
import EventList from '@/components/events/EventList/EventList';

// repositories
import { getAllEvents } from '@/dummy-data';

function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export default EventsPage;
