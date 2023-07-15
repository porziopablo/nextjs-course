// vendors
import React from 'react';
import { useRouter } from 'next/router';

// types
import { APP_PAGES } from '@/types/internal/pages';

// repositories
import { useFilteredEvents } from '@/repositories/events';

// components
import EventList from '@/components/events/EventList/EventList';
import ResultsTitle from '@/components/events/ResultsTitle/ResultsTitle';
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';
import ErrorAlert from '@/components/ui/ErrorAlert/ErrorAlert';
import { PageHead } from '@/components/layout/Head/Head';

export default function FilteredEventsPage() {
  const router = useRouter<`${APP_PAGES.EVENT_FILTER}`>();
  const { slug = [] } = router.query;

  const year = +slug[0];
  const month = +slug[1];

  const head = (
    <PageHead
      title="Filtered Events"
      description={`All events for ${month}/${year}`}
    />
  );

  if (isNaN(year) || isNaN(month)) {
    return (
      <>
        {head}
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <ButtonLink href={APP_PAGES.EVENTS}>Show All Events</ButtonLink>
        </div>
      </>
    );
  }

  const { data = [], isLoading } = useFilteredEvents({ year, month });

  if (isLoading) return <p className="center">Loading...</p>;

  if (!data.length) {
    return (
      <>
        {head}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <ButtonLink href={APP_PAGES.EVENTS}>Show All Events</ButtonLink>
        </div>
      </>
    );
  }

  return (
    <>
      {head}
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList events={data} />
    </>
  );
}
