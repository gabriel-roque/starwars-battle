import { GAMEMODES, CHARACTERS } from 'enums';
import { IPlayer, ICharacter, IBattle, IAction } from 'interfaces';

export function mounteBattle(gamemode: string, player: IPlayer): IBattle | void {
  if (gamemode === GAMEMODES.IA) {
    const adversary = shuffleAdversary(player);
    return {
      playerA: player,
      playerB: {
        nick: 'computer',
        side: adversary.side,
        gamemode: GAMEMODES.IA,
        status: { life: 100, power: 100, shield: 3 },
        character: adversary,
      },
      history: [],
      turn: 'PLAYER_A',
    };
  }
}

function shuffleAdversary(player: IPlayer): ICharacter {
  const character: ICharacter = !random(0, 2)
    ? CHARACTERS.light[random(0, CHARACTERS.light.length)]
    : CHARACTERS.dark[random(0, CHARACTERS.dark.length)];
  if (player.character.name === character.name) return shuffleAdversary(player);
  return character;
}

function random(min: number, max: number): number {
  return min + Math.floor((max - min) * Math.random());
}

export function turn(battle: IBattle, action: IAction) {
  battle.playerA.status.life = random(0, 100);
  battle.playerB.status.life = random(0, 100);
  return battle;
}
