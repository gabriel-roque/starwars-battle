import { Player } from 'interfaces';

export interface Battle {
  playerA: Player;
  playerB: Player;
  history: Array<History>;
  turn: 'PLAYER_A' | 'PLAYER_B' | string;
}

export interface History {
  player: Player;
  event: any;
}
