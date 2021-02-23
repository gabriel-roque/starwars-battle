import { makeStyles } from '@material-ui/core/styles';

import { palletColors } from 'config';

export const useStyles = makeStyles(() => ({
  area: {
    width: '80%',
    height: '90%',
    backgroundColor: palletColors.cyan,
    borderRadius: 15,
    padding: '20px 0',
  },
  item: {
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: 40,
    padding: 10,
    margin: '5px 20px',
    borderRadius: 15,
    fontWeight: 'bolder',
  },
}));
