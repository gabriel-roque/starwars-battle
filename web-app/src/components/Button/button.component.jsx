import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from '@fortawesome/free-solid-svg-icons';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  btnBattle: {
    marginTop: theme.spacing(5),
    transform: 'rotate(1.08deg)',
    backgroundColor: '#8D16E7',
    fontWeight: 'bolder',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#16e96e'
    }
  }
}));

export function ButtonBattle() {
  const classes = useStyles();
  return (
    <Button variant="contained" color="primary" className={classes.btnBattle}>
      <FontAwesomeIcon
        icon={faJedi}
        style={{ margin: '5px 15px 5px 0' }}
        size="2x"
      />
      Go to battle!
    </Button>
  );
}
