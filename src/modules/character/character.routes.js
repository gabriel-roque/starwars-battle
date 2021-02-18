import { lazy } from 'react'

const ChosseNicknamePage = lazy(() => import('./pages/choose-nick/choose-nick.page'))
const ChosseGamemodePage = lazy(() => import('./pages/choose-gamemode/choose-gamemode.page'))
const ChosseSidePage = lazy(() => import('./pages/choose-side/choose-side.page'))
const ChossePlayerPage = lazy(() => import('./pages/choose-player/choose-player.page'))

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
  {
    path: '/character/choose/side',
    component: ChosseSidePage,
    name: 'character.side',
    public: false
  },
  {
    path: '/character/choose/player',
    component: ChossePlayerPage,
    name: 'character.player',
    public: false
  },
];
