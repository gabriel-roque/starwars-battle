import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles } from './player.styles';

interface Props {
  player: {
    name: string;
    color: string;
    img: string;
  };
  nick?: string;
  noPointer?: boolean;
}

export function Player(props: Props) {
  const classes = useStyles({ ...props.player, noPointer: props.noPointer });

  return (
    <Grid container justify="center">
      <Grid container item className={classes.image} />
      <Grid container item justify="center" style={{ marginTop: 20 }}>
        {props?.nick && (
          <Grid container item justify="center">
            <h1 className={classes.nick}>{props?.nick}</h1>
          </Grid>
        )}
        <Grid container item justify="center">
          <h1 className={classes.label}>{props?.player?.name}</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}
