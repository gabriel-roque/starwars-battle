import { makeStyles, Theme } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles((theme: Theme) => ({
  image: {
    height: 250,
    width: 250,
    [theme.breakpoints.only('lg')]: {
      height: 180,
      width: 180,
    },
    [theme.breakpoints.only('sm')]: {
      height: 100,
      width: 100,
    },
    borderRadius: 150,
    border: '5px solid white',
    backgroundSize: 'cover !important',
    background: (props?: any) =>
      `linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, ${props?.color} 150%), url(${props?.img}) center;`,
    transition: '0.8s',
    '&:hover': {
      cursor: (props?: any) => (props.noPointer ? '' : 'pointer'),
      outline: 'none',
      padding: theme.spacing(2),
      boxShadow: (props?: any) => `0px 0px 15px 5px ${props?.color}`,
    },
  },
  label: {
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    color: 'white',
    width: 150,
    textAlign: 'center',
    backgroundColor: palletColors.cyan,
    [theme.breakpoints.down('lg')]: {
      fontSize: 15,
      width: 120,
    },
  },
  nick: {
    padding: '5px 15px',
    borderRadius: '10px 10px 0 0',
    fontSize: 11,
    color: 'white',
    backgroundColor: palletColors.cyan,
  },
  nickSnap: {
    [theme.breakpoints.only('sm')]: {
      alignContent: 'space-around',
    },
  },
  characterSnap: {
    [theme.breakpoints.only('sm')]: {
      alignContent: 'space-around',
    },
  },
  area: {
    marginTop: 20,
    [theme.breakpoints.only('sm')]: {
      alignContent: 'center',
    },
  },
}));
