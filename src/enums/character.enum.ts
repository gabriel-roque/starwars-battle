import KyloRen from 'assets/img/chars/kylo-icon.png';
import LukeSkywalker from 'assets/img/chars/luke-icon.png';
import DarthMaul from 'assets/img/chars/maul-icon.png';
import ReySkywalker from 'assets/img/chars/rey-icon.png';
import DarthVader from 'assets/img/chars/vader-icon.png';
import Yoda from 'assets/img/chars/yoda-icon.png';

import { palletColors } from 'config';
import { ICharactersEnum } from 'interfaces';

export const GAMEMODES = {
  IA: 'IA',
  MULTIPLAYER: 'MP',
};

export const SIDES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

export const CHARACTERS: ICharactersEnum = {
  dark: [
    {
      name: 'Kylo Ren',
      color: palletColors.red,
      img: KyloRen,
    },
    {
      name: 'Darth Vader',
      color: palletColors.red,
      img: DarthVader,
    },
    {
      name: 'Kylo Ren',
      color: palletColors.red,
      img: DarthMaul,
    },
  ],
  light: [
    {
      name: 'Rey Skywalker',
      color: palletColors.blue,
      img: ReySkywalker,
    },
    {
      name: 'Luke Skywalker',
      color: palletColors.blue,
      img: LukeSkywalker,
    },
    {
      name: 'Yoda',
      color: palletColors.blue,
      img: Yoda,
    },
  ],
};
