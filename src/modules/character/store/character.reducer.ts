import { INITIAL_STATE } from './character.state';
import * as types from './character.types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_NICKNAME:
      return { ...state, character: { ...state.character, nick: action.data } };
    default:
      return state;
  }
};
