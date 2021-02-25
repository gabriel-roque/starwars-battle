import { INITIAL_STATE } from './battle.state';
import * as types from './battle.types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INIT_BATTLE:
      return { ...action.data };
    case types.TURN_BATTLE:
      return { ...action.data };
    default:
      return state;
  }
};
