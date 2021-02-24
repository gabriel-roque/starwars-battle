import KyloRen from 'assets/img/chars/kylo-icon.png';
import LukeSkywalker from 'assets/img/chars/luke-icon.png';
import DarthMaul from 'assets/img/chars/maul-icon.png';
import ReySkywalker from 'assets/img/chars/rey-icon.png';
import DarthVader from 'assets/img/chars/vader-icon.png';
import Yoda from 'assets/img/chars/yoda-icon.png';

import { palletColors } from 'config';
import { SIDES } from 'enums';
import { ICharactersEnum } from 'interfaces';

export const CHARACTERS: ICharactersEnum = {
  dark: [
    {
      name: 'Kylo Ren',
      color: palletColors.red,
      img: KyloRen,
      side: SIDES.DARK,
    },
    {
      name: 'Darth Vader',
      color: palletColors.red,
      img: DarthVader,
      side: SIDES.DARK,
    },
    {
      name: 'Kylo Ren',
      color: palletColors.red,
      img: DarthMaul,
      side: SIDES.DARK,
    },
  ],
  light: [
    {
      name: 'Rey Skywalker',
      color: palletColors.blue,
      img: ReySkywalker,
      side: SIDES.LIGHT,
    },
    {
      name: 'Luke Skywalker',
      color: palletColors.blue,
      img: LukeSkywalker,
      side: SIDES.LIGHT,
    },
    {
      name: 'Yoda',
      color: palletColors.blue,
      img: Yoda,
      side: SIDES.LIGHT,
    },
  ],
};
