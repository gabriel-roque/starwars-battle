import { IBattle } from 'interfaces';

export const INITIAL_STATE: IBattle = {
  playerA: {
    nick: '',
    side: '',
    gamemode: '',
    status: {
      life: 100,
      power: 100,
      shield: 3,
    },
    character: {
      color: '',
      img: '',
      name: '',
      side: '',
    },
  },
  playerB: {
    nick: '',
    side: '',
    gamemode: '',
    status: {
      life: 100,
      power: 100,
      shield: 3,
    },
    character: {
      color: '',
      img: '',
      name: '',
      side: '',
    },
  },
};
