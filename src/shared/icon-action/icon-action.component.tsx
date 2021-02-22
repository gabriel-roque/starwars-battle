import React from 'react';

import { Grid } from '@material-ui/core';

import { useStyles } from './icon-action.styles';

import { faHandRock, faTimes, faShieldAlt, faAngleDoubleUp, faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { palletColors } from 'config';

interface Props {
  onClick?: Function;
  type: 'attack' | 'defeat' | 'chager' | 'power';
}

function mountIcon(type: string) {
  switch (type) {
    case 'attack': {
      return {
        icon: faHandRock,
        label: 'attack',
        color: palletColors.blueDark,
      };
    }
    case 'defeat': {
      return {
        icon: faShieldAlt,
        label: 'defeat',
        color: palletColors.yellowDark,
      };
    }
    case 'chager': {
      return {
        icon: faAngleDoubleUp,
        label: 'chager',
        color: palletColors.greenNeon,
      };
    }
    case 'power': {
      return {
        icon: faBolt,
        label: 'power',
        color: palletColors.purple,
      };
    }
    default: {
      return {
        icon: faTimes,
        label: '',
        color: '',
      };
    }
  }
}

export function IconAction(props: Props) {
  const icon = mountIcon(props.type);
  const classes = useStyles(icon);

  return (
    <div className={classes.area} onClick={() => props?.onClick && props?.onClick()}>
      <Grid container justify="center" className={classes.circle}>
        <FontAwesomeIcon icon={icon?.icon} className={classes.icon} />
      </Grid>
      <Grid container justify="center">
        <span className={classes.text}>{icon?.label}</span>
      </Grid>
    </div>
  );
}
