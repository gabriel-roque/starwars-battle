import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles } from './card-multiplayer.styles';

export function CardMultiplayer() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid container item className={classes.image} />
      <Grid container item justify="center">
        <h1 className={classes.title}>
          Another <span className={classes.purpleText}>Player</span>
        </h1>
      </Grid>
    </Grid>
  );
}
