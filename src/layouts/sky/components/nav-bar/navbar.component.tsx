import React from 'react';
import { useHistory } from 'react-router-dom';

import { AppBar, Button, Container, Toolbar } from '@material-ui/core';

import { useStyles } from './navbar.styles';

import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  // const [audio, setAudio] = useState<any>();

  // useEffect(() => {
  //   const audioBrowser = localStorage.getItem('audio');

  //   if (audioBrowser == null) setOnMusic();

  //   if (audioBrowser === 'true') setOnMusic();
  // }, [setOnMusic]);

  // function setOnMusic() {
  //   setAudio(true);
  //   localStorage.setItem('audio', 'true');
  //   const media = document.getElementById('music') as HTMLAudioElement;
  //   media.play();
  // }

  // function setOffMusic() {
  //   setAudio(false);
  //   localStorage.setItem('audio', 'false');
  //   const media = document.getElementById('music') as HTMLAudioElement;
  //   media.pause();
  // }

  return (
    <div className={classes.rootAppBar}>
      <AppBar position="fixed" className={classes.appBar}>
        {/* <audio
          src="https://raw.githubusercontent.com/gabriel-roque/starwars-battle/master/src/assets/media/st-rise-of-skywalker.mp3"
          autoPlay={audio}
          loop
          id="music"
        /> */}
        <Container maxWidth="lg">
          <Toolbar>
            <div className={classes.item}>
              {history.location.pathname !== '/' && (
                <Button color="inherit" className={classes.iconButton} onClick={() => history.goBack()}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
              )}
              <Button color="inherit" className={classes.iconButton} onClick={() => history.push('/')}>
                <FontAwesomeIcon icon={faHome} />
              </Button>
            </div>
            <div>
              {/* {audio === true ? (
                <Button color="inherit" className={classes.iconButton} onClick={() => setOffMusic()}>
                  <FontAwesomeIcon icon={faVolumeMute} />
                </Button>
              ) : (
                <Button color="inherit" className={classes.iconButton} onClick={() => setOnMusic()}>
                  <FontAwesomeIcon icon={faVolumeUp} />
                </Button>
              )} */}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
