import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  icon: {
    color: (props?: any) => props?.color,
    fontSize: 20,
    padding: 20,
    transition: '0.5s',
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
