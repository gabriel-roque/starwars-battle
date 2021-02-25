import { IPlayer } from 'interfaces';

export const INITIAL_STATE: IPlayer = {
  nick: '',
  gamemode: '',
  side: '',
  status: {
    life: 100,
    power: 100,
    shield: 3,
  },
  character: {
    name: '',
    color: '',
    img: '',
    side: '',
  },
};
