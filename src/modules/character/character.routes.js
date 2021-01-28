import { lazy } from 'react'

const ChosseNicknamePage = lazy(() => import('./pages/choose-nick/choose-nick.page'))
const ChosseGamemodePage = lazy(() => import('./pages/choose-gamemode/choose-gamemode.page'))

export const routesCharacter = [
  {
    path: '/character/choose/nickname',
    component: ChosseNicknamePage,
    name: 'character.nickname',
    public: false
  },
  {
    path: '/character/choose/gamemode',
    component: ChosseGamemodePage,
    name: 'character.gamemode',
    public: false
  },
];
