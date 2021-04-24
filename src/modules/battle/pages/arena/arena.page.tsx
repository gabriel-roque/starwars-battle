import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { SkyLayout } from 'layouts';

import { Grid } from '@material-ui/core';

import { turn } from 'utils/battle.utils';

import { useStyles } from './arena.styles';

import { ACTIONS } from 'enums';
import { IBattle, IActionLabel } from 'interfaces';
import { BattleHistory } from 'modules/battle/components';
import * as types from 'modules/battle/store/battle.types';
import { Character, Shield, Bar, IconAction } from 'shared';

export default function ArenaPage() {
  const classes = useStyles();
  const dispath = useDispatch();
  const battle: IBattle = useSelector((state: any) => state.battle);

  function action(battle: IBattle, action: IActionLabel) {
    const resultTurn = turn(battle, action);
    dispath({ type: types.TURN_BATTLE, data: resultTurn });
  }

  return (
    <SkyLayout>
      <Grid container justify="center" alignContent="center" className={classes.page}>
        <Grid container item justify="center" alignContent="flex-end">
          {battle.turn === 'playerA' ? (
            <h1 className={classes.title}>Your turn!</h1>
          ) : (
            <h1 className={classes.title}>Your opponent</h1>
          )}
        </Grid>
        <Grid container item justify="center" alignContent="center" style={{ height: '80%' }}>
          {/* PlayerA */}
          <Grid container item justify="center" xs={3} alignContent="flex-start">
            <Grid container item xs={10}>
              <Shield counter={battle.playerA.status.shield} />
            </Grid>
            <Character character={battle.playerA.character} player={battle.playerA} noPointer />
            <Grid container item xs={10}>
              <Bar type="life" counter={battle.playerA.status.life} />
              <Bar type="power" counter={battle.playerA.status.power} />
            </Grid>
            <Grid container item xs={10} className={classes.actionArea} justify="space-between">
              <IconAction type={ACTIONS.ATTACK} onClick={() => action(battle, ACTIONS.ATTACK)} />
              <IconAction
                type={ACTIONS.DEFEAT}
                onClick={() => action(battle, ACTIONS.DEFEAT)}
                disable={battle.playerA.status.shield >= 6}
              />
              <IconAction
                type={ACTIONS.CHARGER}
                onClick={() => action(battle, ACTIONS.CHARGER)}
                disable={battle.playerA.status.life >= 100}
              />
              <IconAction
                type={ACTIONS.POWER}
                onClick={() => action(battle, ACTIONS.POWER)}
                disable={battle.playerA.status.power < 8}
              />
            </Grid>
          </Grid>
          {/* History */}
          <Grid container item justify="center" xs={3}>
            <BattleHistory />
          </Grid>
          {/* PlayerB */}
          <Grid container item justify="center" xs={3} alignContent="flex-start">
            <Grid container item xs={10}>
              <Shield counter={battle.playerB.status.shield} />
            </Grid>
            <Character character={battle.playerB.character} player={battle.playerB} noPointer />
            <Grid container item xs={10}>
              <Bar type="life" counter={battle.playerB.status.life} />
              <Bar type="power" counter={battle.playerB.status.power} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
