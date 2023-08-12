// vendors
import React from 'react';

// styles
import classes from './Input.module.css';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}

export function Input(props: InputProps) {
  const { id, label, ...rest } = props;

  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <input {...rest} id={id} />
    </div>
  );
}

export function TextArea(props: TextAreaProps) {
  const { id, label, ...rest } = props;

  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <textarea {...rest} id={id} />
    </div>
  );
}
