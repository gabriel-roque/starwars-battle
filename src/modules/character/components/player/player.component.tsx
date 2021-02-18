import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import { useStyles } from './player.styles';

import * as types from 'modules/character/store/character.types';

interface Props {
  player: {
    name: string;
    color: string;
    img: string;
  };
}

export function Player(props: Props) {
  const classes = useStyles(props.player);

  const dispath = useDispatch();

  return (
    <Link to="/battle" onClick={() => dispath({ type: types.SET_PLAYER, data: props.player })}>
      <Grid container justify="center">
        <Grid container item className={classes.image} />
        <Grid container item justify="center">
          <h1 className={classes.title}>{props.player.name}</h1>
        </Grid>
      </Grid>
    </Link>
  );
}
