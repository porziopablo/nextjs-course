// vendors
import React from 'react';

// styles
import classes from '../ButtonLink/ButtonLink.module.css';

interface CustomButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

function Button(props: CustomButtonProps) {
  const { children, ...rest } = props;

  return (
    <button className={classes.btn} {...rest}>
      {children}
    </button>
  );
}

export default Button;
