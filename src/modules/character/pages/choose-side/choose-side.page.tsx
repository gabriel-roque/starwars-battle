import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { SkyLayout } from 'layouts';

import { Grid } from '@material-ui/core';

import { useStyles } from './choose-side.styles';

import { SIDES } from 'enums/character.enum';
import { LightSide, DarkSide } from 'modules/character/components';
import * as types from 'modules/character/store/character.types';

export default function ChooseSidePage() {
  const classes = useStyles();
  const dispath = useDispatch();

  return (
    <SkyLayout>
      <Grid container justify="center" alignContent="center" className={classes.page}>
        <Grid container item justify="center" alignContent="flex-end">
          <h1 className={classes.title}>Select your side</h1>
        </Grid>
        <Grid container item justify="center" alignContent="center" style={{ height: '80%' }}>
          <Grid container item md={5} lg={4}>
            <Link
              className={classes.link}
              to="/character/choose/player"
              onClick={() => dispath({ type: types.SET_SIDE, data: SIDES.LIGHT })}
            >
              <LightSide />
            </Link>
          </Grid>
          <Grid container item md={5} lg={4}>
            <Link
              className={classes.link}
              to="/character/choose/player"
              onClick={() => dispath({ type: types.SET_SIDE, data: SIDES.DARK })}
            >
              <DarkSide />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
