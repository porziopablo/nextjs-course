// vendors
import React from 'react';
import { useRouter } from 'next/router';

// types
import { APP_PAGES } from '@/types/internal/pages';

// repositories
import { getFilteredEvents } from '@/dummy-data';

// components
import EventList from '@/components/events/EventList/EventList';
import ResultsTitle from '@/components/events/ResultsTitle/ResultsTitle';
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';
import ErrorAlert from '@/components/ui/ErrorAlert/ErrorAlert';

function FilteredEventsPage() {
  const router = useRouter<`${APP_PAGES.EVENT_FILTER}`>();
  const { slug } = router.query;

  if (!slug) return <p className="center">Loading...</p>;

  const year = +slug[0];
  const month = +slug[1];

  if (isNaN(year) || isNaN(month)) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <ButtonLink href={APP_PAGES.EVENTS}>Show All Events</ButtonLink>
        </div>
      </>
    );
  }

  const events = getFilteredEvents({ year, month });

  if (!events || events.length === 0) {
    return (
      <>
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
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList events={events} />
    </>
  );
}

export default FilteredEventsPage;