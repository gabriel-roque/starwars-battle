import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  page: {
    height: '100%',
  },
  title: {
    color: 'white',
  },
  singlePlayerGrid: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 15,
    },
  },
}));
