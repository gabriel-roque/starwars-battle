import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import { useStyles } from './battle-history.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IBattle } from 'interfaces';

export function BattleHistory() {
  const battle: IBattle = useSelector((state: any) => state.battle);
  const classes = useStyles();

  return (
    <Grid container className={classes.area} alignContent="flex-start">
      {battle.history?.slice(Math.max(battle.history.length - 11, 0)).map((action, i) => (
        <Grid container item className={classes.item} alignItems="center" justify="center" key={i}>
          <span style={{ fontSize: 18 }}>
            <b>{action.player.character.name}</b>:
            <span style={{ color: action.action.color }}>
              {' '}
              {action.action.label} <FontAwesomeIcon icon={action.action.icon} /> {'+'} {action.action.value}
            </span>
          </span>
        </Grid>
      ))}
    </Grid>
  );
}
