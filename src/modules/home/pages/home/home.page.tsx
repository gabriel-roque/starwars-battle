import React from 'react';
import { Link } from 'react-router-dom';

import { SkyLayout } from 'layouts/sky/sky.layout';

import StarWarsBattleLogo from 'assets/img/starwars-battle-logo.png';

import { ButtonBattle } from 'components/Button/button.component';

import { Grid } from '@material-ui/core';

import { useStyles } from './home.styles';

export default function Home() {
  const classes = useStyles();

  return (
    <SkyLayout>
      <Grid container className={classes.page}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid container item justify="center" xs={10} md={8} lg={5} xl={4} className={classes.elements}>
            <img src={StarWarsBattleLogo} alt="starwars battle logo" draggable="false" className={classes.logo} />
            <Link to="/choose/nickname">
              <ButtonBattle />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
