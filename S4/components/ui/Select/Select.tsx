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
  customRef?: React.LegacyRef<HTMLSelectElement>;
}

function Select(props: SelectProps) {
  const { id, label, customRef, options = [] } = props;

  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <select ref={customRef} id={id}>
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
