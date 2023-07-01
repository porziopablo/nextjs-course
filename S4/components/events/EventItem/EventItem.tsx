// vendors
import React, { useMemo } from 'react';

// components
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';
import DateIcon from '@/components/icons/Date';
import AddressIcon from '@/components/icons/Address';
import ArrowRightIcon from '@/components/icons/ArrowRight';

// types
import { Event } from '@/types/entities/events';
import { APP_PAGES } from '@/types/internal/pages';

// helpers
import { getHumanReadableDate } from '@/helpers/dateHelpers';
import { getFormattedAddress } from '@/helpers/presentationHelpers';

// styles
import classes from './EventItem.module.css';

interface EventItemProps {
  event: Event;
}

function EventItem(props: EventItemProps) {
  const { event } = props;
  const { title, location, date, image } = event;

  const formattedDate = useMemo(() => getHumanReadableDate(date), [date]);
  const formattedAddress = useMemo(
    () => getFormattedAddress(location),
    [location]
  );

  return (
    <li className={classes.item}>
      <img src={image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <ButtonLink href={`${APP_PAGES.EVENTS}/${event.id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </ButtonLink>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
