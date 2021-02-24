import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { SkyLayout } from 'layouts';

import { Grid } from '@material-ui/core';

import { useStyles } from './choose-gamemode.styles';

import { GAMEMODES } from 'enums';
import { CardMultiplayer, CardSingleplayer } from 'modules/player/components';
import * as types from 'modules/player/store/player.types';

export default function ChooseGamemodePage() {
  const classes = useStyles();
  const dispath = useDispatch();

  return (
    <SkyLayout>
      <Grid container justify="center" alignContent="center" className={classes.page}>
        <Grid container item justify="center" alignContent="flex-end">
          <h1 className={classes.title}>Select the gamemode</h1>
        </Grid>
        <Grid container item justify="center" alignContent="center" style={{ height: '80%' }}>
          <Grid container item md={5} lg={5} xl={4}>
            <Link
              to="/player/choose/side"
              onClick={() => dispath({ type: types.SET_GAME_MODE, data: GAMEMODES.MULTIPLAYER })}
            >
              <CardMultiplayer />
            </Link>
          </Grid>
          <Grid container item md={5} lg={5} xl={4}>
            <Link to="/player/choose/side" onClick={() => dispath({ type: types.SET_GAME_MODE, data: GAMEMODES.IA })}>
              <CardSingleplayer />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
