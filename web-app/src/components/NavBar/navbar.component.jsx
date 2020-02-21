import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAudio } from 'modules/core/store/actions';

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

function NavBar({ audio, setAudio }) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const audioBrowser = localStorage.getItem('audio');

    if (audioBrowser == null) setOnMusic();

    if (audioBrowser === 'true') setOnMusic();
  }, [setOnMusic]);

  function setOnMusic() {
    localStorage.setItem('audio', true);
    document.getElementById('music').play();
    setAudio(true);
  }

  function setOffMusic() {
    localStorage.setItem('audio', false);
    document.getElementById('music').pause();
    setAudio(false);
  }

  return (
    <div className={classes.rootAppBar}>
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

              {audio === true ? (
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

const mapStateToProps = state => ({
  audio: state.core.audio
});

const mapDispatchToProps = dispatch => ({
  setAudio: status => dispatch(setAudio(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
