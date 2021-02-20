import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles, LifeBar, PowerBar } from './bar-progress.styles';

interface Props {
  type: 'life' | 'power';
  counter: number;
}

export function Bar(props: Props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.bar}>
      {props.type === 'life' && (
        <>
          <span className={classes.text}>life</span>
          <LifeBar variant="determinate" value={props.counter} />
        </>
      )}
      {props.type === 'power' && (
        <>
          <span className={classes.text}>power</span>
          <PowerBar variant="determinate" value={props.counter} />
        </>
      )}
    </Grid>
  );
}
