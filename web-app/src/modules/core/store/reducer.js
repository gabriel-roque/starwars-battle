import * as types from './types';

const INITIAL_STATE = {
  audio: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_AUDIO:
      return { ...state, audio: action.audio };

    default:
      return state;
  }
};
