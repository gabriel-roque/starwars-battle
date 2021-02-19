import { makeStyles } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles(theme => ({
  page: {
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: '22px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  areaNickname: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    background: 'rgba(255, 255, 255, 0.32)',
    color: 'white',
    borderRadius: '50px',
    maxWidth: '400px',
    maxHeight: '30px',
    textAlign: 'center',
    textTransform: 'lowercase',
    fontSize: '20px',
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    borderStyle: 'hidden',
    transition: '0.8s',
    '&:focus': {
      outline: 'none',
      marginTop: theme.spacing(3),
      padding: theme.spacing(2),
      maxWidth: '420px',
      background: 'black',
      boxShadow: `0px 0px 15px 5px ${palletColors.green}`,
    },
  },
  button: {
    marginTop: 30,
    backgroundColor: palletColors.purple,
    fontWeight: 'bolder',
    borderRadius: '10px',
    padding: '8px 15px',
    color: 'white',
    '&:hover': {
      transition: '0.4s !important',
      backgroundColor: palletColors.green,
    },
  },
  alert: {
    marginTop: 20,
    color: palletColors.red,
  },
}));
