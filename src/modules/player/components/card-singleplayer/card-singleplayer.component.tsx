import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles } from './card-singleplayer.styles';

export function CardSingleplayer() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid container item className={classes.image} />
      <Grid container item justify="center">
        <h1 className={classes.title}>
          Playground with <span className={classes.spotlight}>IA</span>
        </h1>
      </Grid>
    </Grid>
  );
}
