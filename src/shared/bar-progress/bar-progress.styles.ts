import { createStyles, LinearProgress, withStyles, makeStyles, Theme } from '@material-ui/core';

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

export const PowerBar = withStyles((theme: Theme) =>
  createStyles({
    ...COMMON_CSS,
    root: {
      ...COMMON_CSS.root,
      [theme.breakpoints.only('lg')]: {
        height: 10,
      },
      [theme.breakpoints.only('sm')]: {
        height: 8,
      },
    },
    bar: {
      transition: '0.8s',
      borderRadius: 5,
      backgroundColor: palletColors.purple,
    },
  }),
)(LinearProgress);

export const LifeBar = withStyles((theme: Theme) =>
  createStyles({
    ...COMMON_CSS,
    root: {
      ...COMMON_CSS.root,
      [theme.breakpoints.only('lg')]: {
        height: 10,
      },
      [theme.breakpoints.only('sm')]: {
        height: 8,
      },
    },
    bar: {
      transition: '0.8s',
      borderRadius: 5,
      backgroundColor: palletColors.red,
    },
  }),
)(LinearProgress);
