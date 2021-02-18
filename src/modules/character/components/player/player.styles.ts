import { makeStyles, Theme } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles((theme: Theme) => ({
  image: {
    height: 250,
    width: 250,
    borderRadius: 150,
    border: '5px solid white',
    backgroundSize: 'cover !important',
    background: (props: any) =>
      `linear-gradient(180deg, rgba(0, 0, 0, 0) 35%, ${props.color} 150%), url(${props.img}) center;`,
    transition: '0.8s',
    '&:hover': {
      cursor: 'pointer',
      outline: 'none',
      padding: theme.spacing(2),
      boxShadow: (props: any) => `0px 0px 15px 5px ${props.color}`,
    },
  },
  title: {
    margin: 20,
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    color: 'white',
    backgroundColor: palletColors.cyan,
  },
}));
