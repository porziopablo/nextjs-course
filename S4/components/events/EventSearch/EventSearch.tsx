// vendors
import React from 'react';

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

function EventSearch() {
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <Select id="year" label="Year" options={DUMMY_YEARS} />
        <Select id="month" label="Month" options={DUMMY_MONTHS} />
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventSearch;
