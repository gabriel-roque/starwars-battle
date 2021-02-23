export interface Player {
  nick: string;
  gamemode: 'IA' | 'MP' | string;
  side: 'LIGHT' | 'DARK' | string;
  status?: {
    life: number;
    power: number;
  };
  character: Character;
}

export interface Character {
  name: string;
  color: string;
  img: string;
}
