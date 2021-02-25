import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SkyLayout } from 'layouts';

import { Grid } from '@material-ui/core';

import { mounteBattle } from 'utils/battle.utils';

import { useStyles } from './choose-character.styles';

import { CHARACTERS, SIDES } from 'enums';
import { ICharacter } from 'interfaces';
import { INIT_BATTLE } from 'modules/battle/store/battle.types';
import { SET_CHARACTER } from 'modules/player/store/player.types';
import { Character } from 'shared';

export default function ChooseCharacterPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispath = useDispatch();
  const player = useSelector((state: any) => state.player);

  function startBattle(character: ICharacter) {
    dispath({ type: SET_CHARACTER, data: character });
    const battle = mounteBattle(player.gamemode, { ...player, character });
    dispath({ type: INIT_BATTLE, data: battle });
    history.push('/battle/arena');
  }

  return (
    <SkyLayout>
      <Grid container justify="center" alignContent="center" className={classes.page}>
        <Grid container item justify="center" alignContent="flex-end">
          <h1 className={classes.title}>Select your character</h1>
        </Grid>
        <Grid container item justify="center" alignContent="center" style={{ height: '80%' }}>
          {player.side === SIDES.LIGHT
            ? CHARACTERS.light.map((character, i) => (
                <Grid container item xs={3} key={i}>
                  <div onClick={() => startBattle(character)}>
                    <Character character={character} />
                  </div>
                </Grid>
              ))
            : CHARACTERS.dark.map((character, i) => (
                <Grid container item xs={3} key={i}>
                  <div onClick={() => startBattle(character)}>
                    <Character character={character} />
                  </div>
                </Grid>
              ))}
        </Grid>
      </Grid>
    </SkyLayout>
  );
}
