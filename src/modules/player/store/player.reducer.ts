import { setSessionPlayer } from 'utils';

import { INITIAL_STATE } from './player.state';
import * as types from './player.types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_NICKNAME:
      setSessionPlayer({ ...state, nick: action.data });
      return { ...state, nick: action.data };
    case types.SET_GAME_MODE:
      setSessionPlayer({ ...state, gamemode: action.data });
      return { ...state, gamemode: action.data };
    case types.SET_SIDE:
      setSessionPlayer({ ...state, side: action.data });
      return { ...state, side: action.data };
    case types.SET_CHARACTER:
      setSessionPlayer({ ...state, character: action.data });
      return { ...state, character: action.data };
    case types.RESTORE_SESSION:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
