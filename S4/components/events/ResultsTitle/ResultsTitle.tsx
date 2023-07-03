// vendors
import React, { useMemo } from 'react';

// components
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';

// types
import { APP_PAGES } from '@/types/internal/pages';

// helpers
import { getHumanReadableDate } from '@/helpers/dateHelpers';

// styles
import classes from './ResultsTitle.module.css';

interface ResultsTitleProps {
  date: Date;
}

function ResultsTitle(props: ResultsTitleProps) {
  const { date } = props;

  const humanReadableDate = useMemo(
    () => getHumanReadableDate(date, true),
    [date]
  );

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <ButtonLink href={APP_PAGES.EVENTS}>Show all events</ButtonLink>
    </section>
  );
}

export default ResultsTitle;
