import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles } from './light-side.styles';

export function LightSide() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid container item className={classes.image} />
      <Grid container item justify="center">
        <h1 className={classes.title}>Light Side</h1>
      </Grid>
    </Grid>
  );
}
