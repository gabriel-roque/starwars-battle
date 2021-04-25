import { mountIcon, random } from 'utils';

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

function checkShield(shield: number, hit: number) {
  return shield - hit < 0 ? 0 : shield - hit;
}

function apllyAttack(receivingPlayer: IPlayer) {
  const ATTACK = random(2, 8);
  const SHIELD = checkShield(receivingPlayer.status.shield, ATTACK);
  receivingPlayer.status.life = receivingPlayer.status.life - (ATTACK - receivingPlayer.status.shield);
  if (receivingPlayer.status.life >= 100) receivingPlayer.status.life = 100;
  receivingPlayer.status.shield = SHIELD;
  return { receivingPlayer, value: ATTACK };
}

function apllyDefeat(receivingPlayer: IPlayer) {
  const REGENERATE_SHIELD = random(3, 6);
  receivingPlayer.status.shield = receivingPlayer.status.shield += REGENERATE_SHIELD;
  return { receivingPlayer, value: REGENERATE_SHIELD };
}

function applyPower(receivingPlayer: IPlayer) {
  const POWER = random(15, 25);
  const SHIELD = checkShield(receivingPlayer.status.shield, POWER);
  receivingPlayer.status.life = receivingPlayer.status.life - (POWER - receivingPlayer.status.shield);
  receivingPlayer.status.shield = SHIELD;
  return { receivingPlayer, value: POWER };
}

function applyCharger(receivingPlayer: IPlayer) {
  const POWER = random(3, 7);
  const LIFE = random(5, 10);
  receivingPlayer.status.life = receivingPlayer.status.power += LIFE;
  receivingPlayer.status.power = receivingPlayer.status.power += POWER;

  if (receivingPlayer.status.life >= 100) receivingPlayer.status.life = 100;
  if (receivingPlayer.status.power >= 100) receivingPlayer.status.power = 100;

  return { receivingPlayer, value: POWER + LIFE };
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

    case ACTIONS.DEFEAT: {
      if (battle.turn === 'playerA') {
        const { receivingPlayer, value } = apllyDefeat(playerA);
        battle.playerA = receivingPlayer;
        battle.turn = 'playerB';
        battle.history?.push({ player: battle.playerA, action: mountAction(action, value) });
      } else {
        const { receivingPlayer, value } = apllyDefeat(playerB);
        battle.playerB = receivingPlayer;
        battle.turn = 'playerA';
        battle.history?.push({ player: battle.playerB, action: mountAction(action, value) });
      }
      break;
    }

    case ACTIONS.CHARGER: {
      if (battle.turn === 'playerA') {
        const { receivingPlayer, value } = applyCharger(playerA);
        battle.playerA = receivingPlayer;
        battle.turn = 'playerB';
        battle.history?.push({ player: battle.playerA, action: mountAction(action, value) });
      } else {
        const { receivingPlayer, value } = applyCharger(playerB);
        battle.playerB = receivingPlayer;
        battle.turn = 'playerA';
        battle.history?.push({ player: battle.playerB, action: mountAction(action, value) });
      }
      break;
    }

    case ACTIONS.POWER: {
      if (battle.turn === 'playerA') {
        const { receivingPlayer, value } = applyPower(playerB);
        battle.playerB = receivingPlayer;
        battle.turn = 'playerB';
        battle.playerA.status.power = battle.playerA.status.power - value;
        battle.history?.push({ player: battle.playerA, action: mountAction(action, value) });
      } else {
        const { receivingPlayer, value } = applyPower(playerA);
        battle.playerA = receivingPlayer;
        battle.turn = 'playerA';
        battle.playerB.status.power = battle.playerB.status.power - value;
        battle.history?.push({ player: battle.playerB, action: mountAction(action, value) });
      }
      break;
    }
  }
  return battle;
}
