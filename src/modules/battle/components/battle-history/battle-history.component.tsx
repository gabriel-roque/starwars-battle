import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles } from './battle-history.styles';

export function BattleHistory() {
  const classes = useStyles();

  return (
    <Grid container className={classes.area} alignContent="flex-start">
      <Grid container item className={classes.item} alignItems="center" justify="center">
        dasdas
      </Grid>
    </Grid>
  );
}
