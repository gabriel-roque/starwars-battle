import SinglePlayer from 'assets/img/singleplayer.jpg';

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
    background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 0, 0, 0.45) 100%), url(${SinglePlayer}) center;`,
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
  spotlight: {
    color: palletColors.red,
  },
}));
