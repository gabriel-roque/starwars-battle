import SinglePlayer from 'assets/img/multiplayer.jpg';

import { makeStyles, Theme } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles((theme: Theme) => ({
  image: {
    [theme.breakpoints.only('md')]: {
      width: 350,
    },
    height: 280,
    width: 450,
    borderRadius: 30,
    backgroundSize: 'cover',
    background: `linear-gradient(180deg, rgba(32, 0, 0, 0) 0%, rgba(145, 0, 255, 0.46) 100%), url(${SinglePlayer}) center;`,
    transition: '0.8s',
    '&:hover': {
      cursor: 'pointer',
      outline: 'none',
      padding: theme.spacing(2),
      boxShadow: `0px 0px 15px 5px ${palletColors.purple}`,
    },
  },
  title: {
    marginTop: 15,
    color: 'white',
  },
  purpleText: {
    color: palletColors.purple,
  },
}));
