// vendors
import React from 'react';
import { GetServerSidePropsContext } from 'nextjs-routes';

// types
import { APP_PAGES } from '@/types/internal/pages';
import { Event } from '@/types/entities/events';

// repositories
import { DateFilter, getFilteredEvents } from '@/repositories/events';

// components
import EventList from '@/components/events/EventList/EventList';
import ResultsTitle from '@/components/events/ResultsTitle/ResultsTitle';
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';
import ErrorAlert from '@/components/ui/ErrorAlert/ErrorAlert';

interface FilteredEventsPageProps {
  events?: Event[];
  invalidFilters?: boolean;
  filters?: DateFilter;
}

export default function FilteredEventsPage(props: FilteredEventsPageProps) {
  const { events = [], invalidFilters, filters } = props;

  if (invalidFilters) {
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

  if (!events.length) {
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
      {filters ? (
        <ResultsTitle date={new Date(filters.year, filters.month - 1)} />
      ) : null}
      <EventList events={events} />
    </>
  );
}

type Context = GetServerSidePropsContext<`${APP_PAGES.EVENT_FILTER}`>;

export async function getServerSideProps(context: Context) {
  const { params } = context;

  const year = +params.slug[0];
  const month = +params.slug[1];

  if (isNaN(year) || isNaN(month)) return { props: { invalidFilters: true } };

  const events = await getFilteredEvents({ year, month });

  return { props: { events, filters: { year, month } } };
}
