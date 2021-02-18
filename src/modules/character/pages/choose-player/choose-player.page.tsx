import React from 'react';
import { useSelector } from 'react-redux';

import { SkyLayout } from 'layouts';

import { Grid } from '@material-ui/core';

import { useStyles } from './choose-player.styles';

import { PLAYERS, SIDES } from 'enums/character.enum';
import { Player } from 'modules/character/components';

export default function ChoosePlayerPage() {
  const classes = useStyles();
  const side = useSelector((state: any) => state.character.character.side);

  return (
    <SkyLayout>
      <Grid container justify="center" alignContent="center" className={classes.page}>
        <Grid container item justify="center" alignContent="flex-end">
          <h1 className={classes.title}>Select your character</h1>
        </Grid>
        <Grid container item justify="center" alignContent="center" style={{ height: '80%' }}>
          {side === SIDES.LIGHT
            ? PLAYERS.light.map((player, i) => (
                <Grid container item xs={3} key={i}>
                  <Player player={player} />
                </Grid>
              ))
            : PLAYERS.dark.map((player, i) => (
                <Grid container item xs={3} key={i}>
                  <Player player={player} />
                </Grid>
              ))}
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
