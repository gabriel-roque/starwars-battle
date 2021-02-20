import { makeStyles } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles(() => ({
  icon: {
    color: palletColors.yellow,
    marginRight: 10,
    fontSize: 18,
  },
  text: {
    color: palletColors.yellow,
    fontWeight: 'bolder',
  },
}));
