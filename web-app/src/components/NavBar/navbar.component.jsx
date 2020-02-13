import React from 'react';

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
    boxShadow: '0px',
    marginTop: theme.spacing(3)
  },
  item: {
    flexGrow: 1
  },
  iconButton: {
    padding: '10px 10px'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();

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
              <Button color="inherit" className={classes.iconButton}>
                <FontAwesomeIcon icon={faSignInAlt} />
              </Button>
              <Button color="inherit" className={classes.iconButton}>
                <FontAwesomeIcon icon={faVolumeMute} />
              </Button>
              <Button color="inherit" className={classes.iconButton}>
                <FontAwesomeIcon icon={faVolumeUp} />
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
