import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { SkyLayout } from 'layouts/sky/sky.layout';

import { Grid, Button, Fade } from '@material-ui/core';

import { parserNickname } from 'utils';

import { useStyles } from './choose-nick.styles';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as types from 'modules/player/store/player.types';

export default function ChosseNickname() {
  const classes = useStyles();
  const dispath = useDispatch();
  const player = useSelector((state: any) => state.player);

  return (
    <SkyLayout>
      <Grid container className={classes.page}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item container xs={8} justify="center">
            <div className={classes.areaNickname}>
              <span className={classes.title}>Enter the nickname</span>
              <input
                type="text"
                defaultValue={player?.nick || ''}
                value={player?.nick}
                className={classes.input}
                onChange={e =>
                  dispath({
                    type: types.SET_NICKNAME,
                    data: parserNickname(e.target.value),
                  })
                }
              />
              {player?.nick?.length > 15 && (
                <Fade in={player?.nick?.length > 15} timeout={800}>
                  <span className={classes.alert}>max length 15</span>
                </Fade>
              )}
              <Fade in={player?.nick?.length >= 3 && player?.nick?.length <= 15} timeout={800}>
                <Link to="/player/choose/gamemode">
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
