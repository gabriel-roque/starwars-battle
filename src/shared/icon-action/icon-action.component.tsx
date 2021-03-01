import React from 'react';

import { Grid } from '@material-ui/core';

import { mountIcon } from 'utils';

import { useStyles } from './icon-action.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IActionLabel } from 'interfaces';

interface Props {
  onClick?: Function;
  type: IActionLabel;
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
