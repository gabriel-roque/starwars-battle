import { mountIcon } from 'utils';

import { GAMEMODES, CHARACTERS, ACTIONS } from 'enums';
import { IPlayer, ICharacter, IBattle, IActionLabel, IAction } from 'interfaces';

export function mountBattle(gamemode: string, player: IPlayer): IBattle | void {
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
      turn: 'playerA',
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

function checkShield(shield: number, hit: number) {
  return shield - hit < 0 ? 0 : shield - hit;
}

function apllyAttack(receivingPlayer: IPlayer) {
  const ATTACK = random(2, 8);
  const SHIELD = checkShield(receivingPlayer.status.shield, ATTACK);
  receivingPlayer.status.life = receivingPlayer.status.life - (ATTACK - receivingPlayer.status.shield);
  receivingPlayer.status.shield = SHIELD;
  return { receivingPlayer, value: ATTACK };
}

function mountAction(action: IActionLabel, value: number): IAction {
  return { ...mountIcon(action), value };
}

export function turn(battle: IBattle, action: IActionLabel) {
  const { playerA, playerB } = battle;

  switch (action) {
    case ACTIONS.ATTACK: {
      if (battle.turn === 'playerA') {
        const { receivingPlayer, value } = apllyAttack(playerB);
        battle.playerB = receivingPlayer;
        battle.turn = 'playerB';
        battle.history?.push({ player: battle.playerA, action: mountAction(action, value) });
      } else {
        const { receivingPlayer, value } = apllyAttack(playerA);
        battle.playerA = receivingPlayer;
        battle.history?.push({ player: battle.playerB, action: mountAction(action, value) });
        battle.turn = 'playerA';
      }
      break;
    }
  }
  return battle;
}
