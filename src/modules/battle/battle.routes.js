import { lazy } from 'react'

const ArenaPage = lazy(() => import('./pages/arena/arena.page'))

export const routesBattle = [
  {
    path: '/battle/arena',
    component: ArenaPage,
    name: 'battle.arena',
    public: false
  },
];
