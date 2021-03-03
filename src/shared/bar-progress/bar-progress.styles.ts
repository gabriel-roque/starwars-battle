import { createStyles, LinearProgress, withStyles, makeStyles } from '@material-ui/core';

import { palletColors } from 'config';

export const useStyles = makeStyles(() => ({
  text: {
    color: 'white',
    fontWeight: 'bolder',
    marginBottom: 15,
  },
  bar: {
    marginTop: 15,
  },
}));

const COMMON_CSS = {
  root: {
    height: 15,
    width: '100%',
    borderRadius: 10,
  },
  colorPrimary: {
    backgroundColor: 'white',
  },
};

export const PowerBar = withStyles(() =>
  createStyles({
    ...COMMON_CSS,
    bar: {
      transition: '0.8s',
      borderRadius: 5,
      backgroundColor: palletColors.purple,
    },
  }),
)(LinearProgress);

export const LifeBar = withStyles(() =>
  createStyles({
    ...COMMON_CSS,
    bar: {
      transition: '0.8s',
      borderRadius: 5,
      backgroundColor: palletColors.red,
    },
  }),
)(LinearProgress);
