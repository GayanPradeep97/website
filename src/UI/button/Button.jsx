import React, { Children } from 'react';
import classes from './Button.module.scss';

const Button = ({outline, Children}) => {
  return (
    <button outline onclick={onclick} className={`${classes.button} ${outline ? classes.outline : ''}`}>
        {Children}
    </button>
  )
}

export default Button