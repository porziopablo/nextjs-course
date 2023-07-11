// vendors
import React from 'react';
import { GetServerSidePropsContext } from 'nextjs-routes';

// components
import EventSummary from '@/components/events/EventDetail/EventSummary';
import EventLogistics from '@/components/events/EventDetail/EventLogistics';
import EventContent from '@/components/events/EventDetail/EventContent';

// repositories
import { getEventById, getFeaturedEvents } from '@/repositories/events';

// types
import { APP_PAGES } from '@/types/internal/pages';
import { Event } from '@/types/entities/events';

interface EventDetailPageProps {
  event?: Event;
}

export default function EventDetailPage({ event }: EventDetailPageProps) {
  if (!event)
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );

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

type Context = GetServerSidePropsContext<`${APP_PAGES.EVENT_DETAIL}`>;

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: Context) {
  const event = await getEventById(params.eventId);

  if (!event) return { notFound: true };

  return { props: { event }, revalidate: 30 };
}
