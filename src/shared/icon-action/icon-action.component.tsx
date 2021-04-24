import React from 'react';

import { Grid } from '@material-ui/core';

import { mountIcon } from 'utils';

import { useStyles } from './icon-action.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IActionLabel } from 'interfaces';

interface Props {
  onClick?: Function;
  type: IActionLabel;
  disable?: true | boolean;
  color?: string;
}

export function IconAction(props: Props) {
  const icon = mountIcon(props.type);
  if (props.disable) {
    icon.color = '#a1a1a1';
    icon.disable = true;
  }
  const classes = useStyles(icon);

  return (
    <div
      className={props.disable ? classes.areaDisable : classes.area}
      onClick={() => props?.onClick && !props.disable && props?.onClick()}
    >
      <Grid container justify="center" className={classes.circle}>
        <FontAwesomeIcon icon={icon?.icon} className={classes.icon} />
      </Grid>
      <Grid container justify="center">
        <span className={classes.text}>{icon?.label}</span>
      </Grid>
    </div>
  );
}
