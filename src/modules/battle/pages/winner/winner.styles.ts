import { makeStyles } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles(() => ({
  title: {
    color: 'white',
    marginBottom: 30,
    textShadow: `3px 3px 5px ${palletColors.purple}`,
  },
  page: {
    height: '100%',
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
}));
