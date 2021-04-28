import React from 'react';
import { useHistory } from 'react-router-dom';

import { AppBar, Button, Container, Toolbar } from '@material-ui/core';

import { useStyles } from './navbar.styles';

import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  const pathsDisable = ['/', '/battle/winner'];

  return (
    <div className={classes.rootAppBar}>
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <div className={classes.item}>
              {!pathsDisable.includes(history.location.pathname) && (
                <Button color="inherit" className={classes.iconButton} onClick={() => history.goBack()}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Button>
              )}
              <Button color="inherit" className={classes.iconButton} onClick={() => history.push('/')}>
                <FontAwesomeIcon icon={faHome} />
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
