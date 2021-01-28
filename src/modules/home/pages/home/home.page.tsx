import React from 'react';
import { Link } from 'react-router-dom';

import { SkyLayout } from 'layouts';

import StarWarsBattleLogo from 'assets/img/starwars-battle-logo.png';

import { Grid } from '@material-ui/core';

import { useStyles } from './home.styles';

import { ButtonBattle } from 'modules/home/components';

export default function Home() {
  const classes = useStyles();

  return (
    <SkyLayout>
      <Grid container className={classes.page}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid container item justify="center" xs={10} md={8} lg={5} xl={4}>
            <img src={StarWarsBattleLogo} alt="starwars battle logo" draggable="false" className={classes.logo} />
            <Link to="/character/choose/nickname">
              <ButtonBattle />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
