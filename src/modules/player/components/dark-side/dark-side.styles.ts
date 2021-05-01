import DarkSide from 'assets/img/dark-side.png';

import { makeStyles, Theme } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles((theme: Theme) => ({
  image: {
    [theme.breakpoints.down('lg')]: {
      height: 400,
    },
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
    // [theme.breakpoints.only('xs')]: {
    //   height: 150,
    // },
    height: 600,
    width: '100%',
    margin: 10,
    borderRadius: 30,
    backgroundSize: 'cover',
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 25%, #CE0000 150%), url(${DarkSide}) center;`,
    transition: '0.8s',
    '&:hover': {
      cursor: 'pointer',
      outline: 'none',
      padding: theme.spacing(2),
      boxShadow: `0px 0px 15px 5px ${palletColors.red}`,
    },
  },
  title: {
    marginTop: 15,
    color: 'white',
  },
}));
