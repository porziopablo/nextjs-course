// vendors
import React from 'react';

// styles
import classes from './Select.module.css';

export interface SelectOption {
  id: string;
  label: string;
}

interface SelectProps {
  id: string;
  label: string;
  options: SelectOption[];
}

function Select(props: SelectProps) {
  const { id, label, options = [] } = props;

  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
