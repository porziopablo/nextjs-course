// vendors
import React, { useMemo } from 'react';
import Image from 'next/image';

// components
import AddressIcon from '@/components/icons/Address';
import DateIcon from '@/components/icons/Date';
import LogisticsItem from './LogisticsItem';

// helpers
import { getHumanReadableDate } from '@/helpers/dateHelpers';
import { getFormattedAddress } from '@/helpers/presentationHelpers';

// styles
import classes from './EventLogistics.module.css';

interface EventLogisticsProps {
  data: {
    date: string;
    address: string;
    image?: string;
    imageAlt?: string;
  };
}

function EventLogistics(props: EventLogisticsProps) {
  const { data } = props;
  const { date, address, image = '', imageAlt = '' } = data;

  const humanReadableDate = useMemo(() => getHumanReadableDate(date), [date]);
  const addressText = useMemo(() => getFormattedAddress(address), [address]);

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={image} alt={imageAlt} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={<DateIcon />}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<AddressIcon />}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
