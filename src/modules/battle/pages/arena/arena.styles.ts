import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  page: {
    height: '100%',
  },
  title: {
    color: 'white',
    [theme.breakpoints.only('sm')]: {
      fontSize: 18,
    },
  },
  bar: {
    backgroundColor: '#1a90ff',
  },
  actionArea: {
    marginTop: 60,
    [theme.breakpoints.only('lg')]: {
      marginTop: 30,
    },
    [theme.breakpoints.only('md')]: {
      marginTop: 30,
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 15,
    },
  },
}));
