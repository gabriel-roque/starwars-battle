import React from 'react';
// import { useState } from 'react';

import { SkyLayout } from 'layouts/sky/sky.layout';

import Grid from '@material-ui/core/Grid';

import { useStyles } from './choose-nick.styles';

export default function ChosseNickname() {
  // const [nick, setNick] = useState('dasdsa');
  const classes = useStyles();

  return (
    <SkyLayout>
      <Grid container className={classes.page}>
        <Grid container direction="row" alignItems="center" justify="center" className={classes.elements}>
          <Grid item container xs={8} justify="center">
            <div className={classes.areaNickname}>
              <span className={classes.title}>Enter the nickname</span>
              <input
                type="text"
                className={classes.input}
                // onChange={e => setNick(e.target.value)}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
