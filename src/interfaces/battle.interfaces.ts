import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IPlayer } from 'interfaces';

export interface IBattle {
  playerA: IPlayer;
  playerB: IPlayer;
  history?: Array<IHistory>;
  turn?: 'playerA' | 'playerB' | string;
}

export interface IHistory {
  player: IPlayer;
  action: IAction;
}

export type IActionLabel = 'attack' | 'defeat' | 'charger' | 'power' | string;

export interface IAction {
  icon: IconDefinition;
  label: IActionLabel;
  color: string;
  value?: number;
  disable?: boolean;
}
