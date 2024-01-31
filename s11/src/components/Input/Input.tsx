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
  customRef?: React.Ref<HTMLInputElement>;
}

interface TextAreaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  customRef?: React.Ref<HTMLTextAreaElement>;
}

export function Input(props: InputProps) {
  const { id, label, customRef, ...rest } = props;

  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <input ref={customRef} {...rest} id={id} />
    </div>
  );
}

export function TextArea(props: TextAreaProps) {
  const { id, label, customRef, ...rest } = props;

  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <textarea ref={customRef} {...rest} id={id} />
    </div>
  );
}
