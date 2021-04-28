import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SkyLayout } from 'layouts';

import { Button, Grid } from '@material-ui/core';

import { useStyles } from './winner.styles';

import { faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Character } from 'shared';

export default function WinnerPage() {
  const winner = useSelector((state: any) => state.battle.winner);
  const classes = useStyles();

  return (
    <SkyLayout>
      <Grid container justify="center" alignContent="center" style={{ height: '100%' }}>
        <h1 className={classes.title}>WINNER!</h1>
        <Grid container item>
          <Character character={winner.character} player={winner} noPointer />
        </Grid>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faJournalWhills} />}
            className={classes.button}
          >
            <b>Play again!</b>
          </Button>
        </Link>
      </Grid>
    </SkyLayout>
  );
}
