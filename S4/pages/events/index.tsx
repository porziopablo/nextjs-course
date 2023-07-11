// vendors
import React from 'react';
import { useRouter } from 'next/router';

// components
import EventList from '@/components/events/EventList/EventList';
import EventSearch, {
  SearchValues,
} from '@/components/events/EventSearch/EventSearch';

// repositories
import { getAllEvents } from '@/repositories/events';

// types
import { APP_PAGES } from '@/types/internal/pages';
import { Event } from '@/types/entities/events';

interface EventsPageProps {
  events: Event[];
}

export default function EventsPage({ events }: EventsPageProps) {
  const router = useRouter();

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

export async function getStaticProps() {
  const events = await getAllEvents();
  return { props: { events }, revalidate: 60 };
}
