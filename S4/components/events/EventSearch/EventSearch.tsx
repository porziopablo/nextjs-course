// vendors
import React, { useRef } from 'react';

// components
import Button from '@/components/ui/Button/Button';
import Select from '@/components/ui/Select/Select';

// styles
import classes from './EventSearch.module.css';

const DUMMY_YEARS = [
  { id: '2021', label: '2021' },
  { id: '2022', label: '2022' },
];

const DUMMY_MONTHS = [
  { id: '1', label: 'January' },
  { id: '2', label: 'February' },
  { id: '3', label: 'March' },
  { id: '4', label: 'April' },
  { id: '5', label: 'May' },
  { id: '6', label: 'June' },
  { id: '7', label: 'July' },
  { id: '8', label: 'August' },
  { id: '9', label: 'September' },
  { id: '10', label: 'October' },
  { id: '11', label: 'November' },
  { id: '12', label: 'December' },
];

export interface SearchValues {
  year: string;
  month: string;
}

interface EventSearchProps {
  onSearch: (values: SearchValues) => void;
}

function EventSearch(props: EventSearchProps) {
  const { onSearch } = props;

  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;

    /* We need two params to filter events, otherwise it will suppose
    that the only param is an event id. */
    if (!selectedYear || !selectedMonth) return;

    onSearch({ year: selectedYear, month: selectedMonth });
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.controls}>
        <Select
          customRef={yearInputRef}
          id="year"
          label="Year"
          options={DUMMY_YEARS}
        />
        <Select
          customRef={monthInputRef}
          id="month"
          label="Month"
          options={DUMMY_MONTHS}
        />
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventSearch;
