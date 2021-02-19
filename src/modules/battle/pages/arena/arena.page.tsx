import React from 'react';
import { useSelector } from 'react-redux';

import { SkyLayout } from 'layouts';

import { Grid } from '@material-ui/core';

import { useStyles } from './arena.styles';

import { Player } from 'shared';

export default function ArenaPage() {
  const classes = useStyles();
  const character = useSelector((state: any) => state.character.character);

  return (
    <SkyLayout>
      <Grid container justify="center" alignContent="center" className={classes.page}>
        <Grid container item justify="center" alignContent="flex-end">
          <h1 className={classes.title}>Turn the ...</h1>
        </Grid>
        <Grid container item justify="center" alignContent="center" style={{ height: '80%' }}>
          <Grid container item justify="center" xs={3}>
            <Player player={character?.player} nick={character.nick} noPointer />
          </Grid>
          <Grid container item justify="center" xs={3}>
            <h3 style={{ color: 'red' }}>place</h3>
          </Grid>
          <Grid container item justify="center" xs={3}>
            <h3 style={{ color: 'red' }}>place</h3>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
