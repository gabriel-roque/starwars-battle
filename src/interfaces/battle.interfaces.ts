import { IPlayer } from 'interfaces';

export interface IBattle {
  playerA: IPlayer;
  playerB: IPlayer;
  history: Array<IHistory>;
  turn: 'PLAYER_A' | 'PLAYER_B' | string;
}

export interface IHistory {
  player: IPlayer;
  event: any;
}
