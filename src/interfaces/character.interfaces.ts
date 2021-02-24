export interface IPlayer {
  nick: string;
  gamemode: 'IA' | 'MP' | string;
  side: ISides;
  status: {
    life: number;
    power: number;
  };
  character: ICharacter;
}

export type ISides = 'LIGHT' | 'DARK' | string;

export interface ICharacter {
  name: string;
  color: string;
  img: string;
  side: ISides;
}

export interface ICharactersEnum {
  dark: Array<ICharacter>;
  light: Array<ICharacter>;
}
