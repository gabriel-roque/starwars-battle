import { makeStyles, Theme } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: palletColors.yellow,
    marginRight: 10,
    fontSize: 18,
    [theme.breakpoints.only('sm')]: {
      fontSize: 14,
    },
  },
  text: {
    color: palletColors.yellow,
    fontWeight: 'bolder',
    [theme.breakpoints.only('sm')]: {
      fontSize: 12,
    },
  },
}));
