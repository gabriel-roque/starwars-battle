import React from 'react';
import { useState } from 'react';

import { SkyLayout } from 'layouts/sky/sky.layout';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  page: {
    height: '100%'
  },
  title: {
    color: 'white',
    fontSize: '22px',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  elements: {
    zIndex: 10
  },
  areaNickname: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    background: 'rgba(255, 255, 255, 0.32)',
    color: 'white',
    borderRadius: '50px',
    maxWidth: '400px',
    maxHeight: '30px',
    textAlign: 'center',
    fontSize: '20px',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    borderStyle: 'hidden',
    transition: '0.8s',
    '&:focus': {
      outline: 'none',
      marginTop: theme.spacing(3),
      padding: theme.spacing(2),
      maxWidth: '420px',
      background: 'black',
      boxShadow: '0px 0px 15px 5px #00ff6a'
    }
  }
}));

export function ChosseNickname() {
  const [nick, setNick] = useState('dasdsa');
  const classes = useStyles();

  return (
    <SkyLayout>
      <Grid container className={classes.page}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          className={classes.elements}
        >
          <Grid item container xs={8} justify="center">
            <div className={classes.areaNickname}>
              <span className={classes.title}>Enter the nickname</span>
              <input
                type="text"
                className={classes.input}
                onChange={e => setNick(e.target.value)}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
