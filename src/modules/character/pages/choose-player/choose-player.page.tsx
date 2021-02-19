import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { SkyLayout } from 'layouts';

import { Grid } from '@material-ui/core';

import { useStyles } from './choose-player.styles';

import { PLAYERS, SIDES } from 'enums/character.enum';
import * as types from 'modules/character/store/character.types';
import { Player } from 'shared';

export default function ChoosePlayerPage() {
  const classes = useStyles();
  const dispath = useDispatch();
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
                  <Link to="/battle/arena" onClick={() => dispath({ type: types.SET_PLAYER, data: player })}>
                    <Player player={player} />
                  </Link>
                </Grid>
              ))
            : PLAYERS.dark.map((player, i) => (
                <Grid container item xs={3} key={i}>
                  <Link to="/battle/arena" onClick={() => dispath({ type: types.SET_PLAYER, data: player })}>
                    <Player player={player} />
                  </Link>
                </Grid>
              ))}
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
