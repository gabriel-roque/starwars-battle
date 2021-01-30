import React from 'react';

import { SkyLayout } from 'layouts';

import { Grid } from '@material-ui/core';

import { useStyles } from './choose-gamemode.styles';

import { CardMultiplayer, CardSingleplayer } from 'modules/character/components';

export default function ChooseGamemodePage() {
  const classes = useStyles();

  return (
    <SkyLayout>
      <Grid container justify="center" alignContent="center" className={classes.page}>
        <Grid container item justify="center" alignContent="flex-end">
          <h1 className={classes.title}>Select the gamemode</h1>
        </Grid>
        <Grid container item justify="center" alignContent="center" style={{ height: '80%' }}>
          <Grid container item md={5} lg={5} xl={4}>
            <CardMultiplayer />
          </Grid>
          <Grid container item md={5} lg={5} xl={4}>
            <CardSingleplayer />
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
