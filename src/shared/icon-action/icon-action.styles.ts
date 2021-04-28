import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: (props?: any) => props?.color,
    fontSize: 20,
    padding: 20,
    transition: '0.5s',
    [theme.breakpoints.only('lg')]: {
      fontSize: 15,
      padding: 15,
    },
    [theme.breakpoints.only('md')]: {
      padding: 10,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 10,
      padding: 8,
    },
  },
  circle: {
    border: (props?: any) => `solid 5px ${props?.color}`,
    borderRadius: 50,
    marginBottom: 10,
    transition: '0.5s',
    '&:hover': {
      cursor: (props?: any) => (props.disable ? 'not-allowed' : 'pointer'),
      boxShadow: (props?: any) => (props.disable ? '' : `0px 0px 15px 1px ${props?.color}`),
    },
  },
  text: {
    color: 'white',
    userSelect: 'none',
    [theme.breakpoints.only('md')]: {
      marginBottom: 10,
    },
  },
  area: {
    width: 70,
    transition: '0.5s',
  },
  areaDisable: {
    width: 70,
    filter: 'blur(4px)',
    transition: '0.5s',
  },
}));
