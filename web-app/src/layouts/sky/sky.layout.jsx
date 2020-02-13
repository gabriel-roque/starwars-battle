import React, { useEffect } from 'react';

// import { makeStyles } from '@material-ui/core/styles';

import Sky from 'components/SkyStars/skystars.component';
import NavBar from 'components/NavBar/navbar.component';

// const useStyles = makeStyles(theme => ({}));

export default function SkyLayout(props) {
  // const classes = useStyles();
  const song = require('assets/media/st-rise-of-skywalker.mp3');

  useEffect(() => {
    let music = new Audio(song);
    music.preload = '';
    // music.play();
  }, [song]);

  return (
    <React.Fragment>
      <Sky />
      <NavBar />
      {props.children}
    </React.Fragment>
  );
}
