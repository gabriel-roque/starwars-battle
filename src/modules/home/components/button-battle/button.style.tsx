import { makeStyles } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles(theme => ({
  btnBattle: {
    marginTop: theme.spacing(5),
    transform: 'rotate(1.08deg)',
    backgroundColor: palletColors.purple,
    fontWeight: 'bolder',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: palletColors.green,
    },
  },
}));
