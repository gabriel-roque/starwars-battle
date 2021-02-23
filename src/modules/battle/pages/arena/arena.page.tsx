import React from 'react';
import { useSelector } from 'react-redux';

import { SkyLayout } from 'layouts';

import { Grid } from '@material-ui/core';

import { useStyles } from './arena.styles';

import { BattleHistory } from 'modules/battle/components';
import { Player, Shield, Bar, IconAction } from 'shared';

export default function ArenaPage() {
  const classes = useStyles();
  const character = useSelector((state: any) => state.character);

  return (
    <SkyLayout>
      <Grid container justify="center" alignContent="center" className={classes.page}>
        <Grid container item justify="center" alignContent="flex-end">
          <h1 className={classes.title}>Turn the ...</h1>
        </Grid>
        <Grid container item justify="center" alignContent="center" style={{ height: '80%' }}>
          <Grid container item justify="center" xs={3}>
            <Grid container item xs={10}>
              <Shield counter={8} />
            </Grid>
            <Player player={character?.player} nick={character.nick} noPointer />
            <Grid container item xs={10}>
              <Bar type="life" counter={88} />
              <Bar type="power" counter={25} />
            </Grid>
            <Grid container item xs={10} className={classes.actionArea} justify="space-between">
              <IconAction type="attack" onClick={() => console.log('test')} />
              <IconAction type="defeat" />
              <IconAction type="charger" />
              <IconAction type="power" />
            </Grid>
          </Grid>
          <Grid container item justify="center" xs={3}>
            <BattleHistory />
          </Grid>
          <Grid container item justify="center" xs={3}>
            <h3 style={{ color: 'red' }}>place</h3>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
