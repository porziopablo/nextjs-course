// vendors
import React from 'react';

// components
import EventList from '@/components/events/EventList/EventList';
import NewsletterRegistration from '@/components/Newsletter/NewsletterRegistration';

// types
import { Event } from '@/types/entities/events';

// repositories
import { getFeaturedEvents } from '@/repositories/events';

interface HomePageProps {
  events: Event[];
}

export default function HomePage({ events }: HomePageProps) {
  return (
    <>
      <NewsletterRegistration />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return { props: { events }, revalidate: 1800 };
}
