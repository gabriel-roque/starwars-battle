import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  icon: {
    color: (props?: any) => props?.color,
    fontSize: 20,
    padding: 20,
  },
  circle: {
    border: (props?: any) => `solid 5px ${props?.color}`,
    borderRadius: 50,
    marginBottom: 10,
    transition: '0.5s',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: (props?: any) => `0px 0px 15px 1px ${props?.color}`,
    },
  },
  text: {
    color: 'white',
  },
  area: {
    width: 70,
  },
}));
