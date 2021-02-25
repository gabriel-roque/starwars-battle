import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IPlayer } from 'interfaces';

export interface IBattle {
  playerA: IPlayer;
  playerB: IPlayer;
  history?: Array<IHistory>;
  turn?: 'PLAYER_A' | 'PLAYER_B' | string;
}

export interface IHistory {
  player: IPlayer;
  event: any;
}

export type IAction = 'attack' | 'defeat' | 'charger' | 'power' | string;

export interface IIcon {
  icon: IconDefinition;
  label: string;
  color: string;
}
