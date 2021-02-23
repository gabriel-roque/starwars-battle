import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { SkyLayout } from 'layouts';

import { Grid } from '@material-ui/core';

import { useStyles } from './choose-character.styles';

import { CHARACTERS, SIDES } from 'enums/character.enum';
import * as types from 'modules/player/store/player.types';
import { Player } from 'shared';

export default function ChooseCharacterPage() {
  const classes = useStyles();
  const dispath = useDispatch();
  const side = useSelector((state: any) => state.player.side);

  return (
    <SkyLayout>
      <Grid container justify="center" alignContent="center" className={classes.page}>
        <Grid container item justify="center" alignContent="flex-end">
          <h1 className={classes.title}>Select your character</h1>
        </Grid>
        <Grid container item justify="center" alignContent="center" style={{ height: '80%' }}>
          {side === SIDES.LIGHT
            ? CHARACTERS.light.map((player, i) => (
                <Grid container item xs={3} key={i}>
                  <Link to="/battle/arena" onClick={() => dispath({ type: types.SET_CHARACTER, data: player })}>
                    <Player player={player} />
                  </Link>
                </Grid>
              ))
            : CHARACTERS.dark.map((player, i) => (
                <Grid container item xs={3} key={i}>
                  <Link to="/battle/arena" onClick={() => dispath({ type: types.SET_CHARACTER, data: player })}>
                    <Player player={player} />
                  </Link>
                </Grid>
              ))}
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
