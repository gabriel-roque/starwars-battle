import { ChooseSide } from 'modules/character/pages/ChooseSide/chooseSide.page';
import { ChosseNickname } from 'modules/character/pages/ChosseNickname/chooseNick.page';

const routesCharacter = [
  {
    path: '/choose/side',
    component: ChooseSide,
    name: 'character.chooseside',
    public: false
  },
  {
    path: '/choose/nickname',
    component: ChosseNickname,
    name: 'character.choosenickname',
    public: false
  }
];

export default routesCharacter;
