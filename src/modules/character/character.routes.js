import { lazy } from 'react'

const ChosseNickname = lazy(() => import('./pages/choose-nick/choose-nick.page'))

export const routesCharacter = [
  {
    path: '/character/choose/nickname',
    component: ChosseNickname,
    name: 'character.nickname',
    public: false
  },
];
