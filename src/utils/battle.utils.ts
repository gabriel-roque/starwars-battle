import { GAMEMODES, CHARACTERS } from 'enums';
import { IPlayer } from 'interfaces';

export function mounteBattle(gamemode: string, player: IPlayer) {
  if (gamemode === GAMEMODES.IA) {
    //
  }
}

// export function shuffleAdversary() {
//   const character: ICharacter = random(0, 1)
//     ? CHARACTERS.light[random(0, CHARACTERS.light.length)]
//     : CHARACTERS.dark[random(0, CHARACTERS.dark.length)];
// }

export function random(min: number, max: number): number {
  return min + Math.floor((max - min) * Math.random());
}
