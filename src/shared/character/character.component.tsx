import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles } from './character.styles';

import { ICharacter, IPlayer } from 'interfaces';

interface Props {
  character: ICharacter;
  player?: IPlayer;
  noPointer?: boolean;
}

export function Character(props: Props) {
  const classes = useStyles({ ...props.character, noPointer: props.noPointer });

  return (
    <Grid container justify="center">
      <Grid container item className={classes.image} />
      <Grid container item justify="center" style={{ marginTop: 20 }}>
        {props?.player?.nick && (
          <Grid container item justify="center">
            <h1 className={classes.nick}>{props?.player?.nick}</h1>
          </Grid>
        )}
        <Grid container item justify="center">
          <h1 className={classes.label}>{props?.character?.name}</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}
