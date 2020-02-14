import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSignInAlt,
  faVolumeMute,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  rootAppBar: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: '0px 0px',
    marginTop: theme.spacing(3)
  },
  item: {
    flexGrow: 1
  },
  iconButton: {
    padding: '10px 10px'
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  // TODO fix audio music
  const [statusMusic, setStatusMusic] = useState(false);
  // const song = require('assets/media/st-rise-of-skywalker.mp3');
  // var music = new Audio(song);

  useEffect(() => {
    const audioBrowser = localStorage.getItem('audio');

    if (audioBrowser == null) setOnMusic();

    if (audioBrowser === 'true') setOnMusic();
  }, []);

  function setOnMusic() {
    localStorage.setItem('audio', true);
    document.getElementById('music').play();
    setStatusMusic(true);
  }

  function setOffMusic() {
    localStorage.setItem('audio', false);
    document.getElementById('music').pause();
    setStatusMusic(false);
  }

  return (
    <div className={classes.rootAppBar}>
      <audio
        src={require('assets/media/st-rise-of-skywalker.mp3')}
        autoPlay={statusMusic}
        loop
        id="music"
      ></audio>
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <div className={classes.item}>
              <Button
                color="inherit"
                className={classes.iconButton}
                onClick={() => history.push('/')}
              >
                <FontAwesomeIcon icon={faHome} />
              </Button>
            </div>
            <div>
              <Button
                color="inherit"
                className={classes.iconButton}
                onClick={() => history.push('/login')}
              >
                <FontAwesomeIcon icon={faSignInAlt} />
              </Button>

              {statusMusic === true ? (
                <Button
                  color="inherit"
                  className={classes.iconButton}
                  onClick={() => setOffMusic()}
                >
                  <FontAwesomeIcon icon={faVolumeMute} />
                </Button>
              ) : (
                <Button
                  color="inherit"
                  className={classes.iconButton}
                  onClick={() => setOnMusic()}
                >
                  <FontAwesomeIcon icon={faVolumeUp} />
                </Button>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
