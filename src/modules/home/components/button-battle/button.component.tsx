import React from 'react';

import Button from '@material-ui/core/Button';

import { useStyles } from './button.style';

import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ButtonBattle() {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.btnBattle}
      size="large"
      startIcon={<FontAwesomeIcon icon={faJedi} size="lg" />}
    >
      Go to battle!
    </Button>
  );
}
