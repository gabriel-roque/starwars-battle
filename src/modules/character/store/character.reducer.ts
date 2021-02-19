import { setSessionPlayer } from 'utils';

import { INITIAL_STATE } from './character.state';
import * as types from './character.types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_NICKNAME:
      setSessionPlayer({ ...state.character, nick: action.data });
      return { ...state, character: { ...state.character, nick: action.data } };
    case types.SET_GAME_MODE:
      setSessionPlayer({ ...state.character, gamemode: action.data });
      return { ...state, character: { ...state.character, gamemode: action.data } };
    case types.SET_SIDE:
      setSessionPlayer({ ...state.character, side: action.data });
      return { ...state, character: { ...state.character, side: action.data } };
    case types.SET_PLAYER:
      setSessionPlayer({ ...state.character, player: action.data });
      return { ...state, character: { ...state.character, player: action.data } };
    case types.RESTORE_SESSION:
      return { ...state, character: action.data };
    default:
      return state;
  }
};
