import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  rootAppBar: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: '0px 0px',
    marginTop: theme.spacing(3),
  },
  item: {
    flexGrow: 1,
  },
  iconButton: {
    padding: '10px 10px',
  },
}));
