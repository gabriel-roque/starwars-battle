import React from 'react';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { ButtonBattle } from 'components/Button/button.component';

import SkyLayout from 'layouts/sky/sky.layout';

const useStyles = makeStyles(theme => ({
  page: {
    height: '100%'
  },
  logo: {
    width: '100%'
  },
  button: {
    marginTop: theme.spacing(10)
  },
  elements: {
    zIndex: 10
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <SkyLayout>
      <Grid container className={classes.page}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            container
            item
            justify="center"
            xs={10}
            md={8}
            lg={5}
            xl={5}
            className={classes.elements}
          >
            <img
              src={require('assets/img/starwars-battle-logo.png')}
              alt="starwars battle logo"
              draggable="false"
              className={classes.logo}
            />
            <Link to="/login">
              <ButtonBattle />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
