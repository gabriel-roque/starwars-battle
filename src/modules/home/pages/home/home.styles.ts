import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  page: {
    height: '100%',
  },
  logo: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(10),
  },
  elements: {
    zIndex: 10,
  },
}));
