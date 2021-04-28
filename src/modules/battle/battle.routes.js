import { lazy } from 'react'

const ArenaPage = lazy(() => import('./pages/arena/arena.page'))
const WinnerPage = lazy(() => import('./pages/winner/winner.page'))

export const routesBattle = [
  {
    path: '/battle/arena',
    component: ArenaPage,
    name: 'battle.arena',
    public: false
  },
  {
    path: '/battle/winner',
    component: WinnerPage,
    name: 'battle.winner',
    public: false
  },
];
