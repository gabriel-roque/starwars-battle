import * as types from './types';

export const setAudio = status => {
  return dispath => {
    dispath({ type: types.SET_AUDIO, audio: status });
  };
};
