export interface IPlayer {
  nick: string;
  gamemode: 'IA' | 'MP' | string;
  side: 'LIGHT' | 'DARK' | string;
  status: {
    life: number;
    power: number;
  };
  character: ICharacter;
}

export interface ICharacter {
  name: string;
  color: string;
  img: string;
}

export interface ICharactersEnum {
  dark: Array<ICharacter>;
  light: Array<ICharacter>;
}
