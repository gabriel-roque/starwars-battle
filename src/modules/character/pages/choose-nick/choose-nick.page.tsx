import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SkyLayout } from 'layouts/sky/sky.layout';

import { Grid, Button, Fade } from '@material-ui/core';

import { parserNickname } from 'utils';

import { useStyles } from './choose-nick.styles';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as types from 'modules/character/store/character.types';

export default function ChosseNickname() {
  const classes = useStyles();
  const dispath = useDispatch();
  const character = useSelector((state: any) => state.character.character);

  return (
    <SkyLayout>
      <Grid container className={classes.page}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item container xs={8} justify="center">
            <div className={classes.areaNickname}>
              <span className={classes.title}>Enter the nickname</span>
              <input
                type="text"
                defaultValue={character?.nick || ''}
                value={character?.nick}
                className={classes.input}
                onChange={e =>
                  dispath({
                    type: types.SET_NICKNAME,
                    data: parserNickname(e.target.value),
                  })
                }
              />
              {character?.nick?.length > 15 && (
                <Fade in={character?.nick?.length > 15} timeout={800}>
                  <span className={classes.alert}>max length 15</span>
                </Fade>
              )}
              <Fade in={character?.nick?.length >= 3 && character?.nick?.length <= 15} timeout={800}>
                <Link to="/character/choose/gamemode">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FontAwesomeIcon icon={faArrowRight} />}
                    className={classes.button}
                  >
                    <b>Next</b>
                  </Button>
                </Link>
              </Fade>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
