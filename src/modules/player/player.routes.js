import { lazy } from 'react'

const ChosseNicknamePage = lazy(() => import('./pages/choose-nick/choose-nick.page'))
const ChosseGamemodePage = lazy(() => import('./pages/choose-gamemode/choose-gamemode.page'))
const ChosseSidePage = lazy(() => import('./pages/choose-side/choose-side.page'))
const ChosseCharacterPage = lazy(() => import('./pages/choose-character/choose-character.page'))

export const routesPlayer = [
  {
    path: '/player/choose/nickname',
    component: ChosseNicknamePage,
    name: 'player.nickname',
    public: false
  },
  {
    path: '/player/choose/gamemode',
    component: ChosseGamemodePage,
    name: 'player.gamemode',
    public: false
  },
  {
    path: '/player/choose/side',
    component: ChosseSidePage,
    name: 'player.side',
    public: false
  },
  {
    path: '/player/choose',
    component: ChosseCharacterPage,
    name: 'player.character',
    public: false
  },
];
