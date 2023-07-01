// vendors
import React from 'react';

// components
import EventList from '@/components/events/EventList/EventList';

// repositories
import { getFeaturedEvents } from '@/dummy-data';

function HomePage() {
  const events = getFeaturedEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export default HomePage;
