import React from 'react';

import { useStyles } from './shield.styles';

import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  counter: number;
}

export function Shield(props: Props) {
  const classes = useStyles();

  return (
    <div>
      <FontAwesomeIcon icon={faShieldAlt} className={classes.icon} />
      <span className={classes.text}>{props.counter}</span>
    </div>
  );
}
