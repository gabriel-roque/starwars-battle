import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { routesBattle } from 'modules/battle/battle.routes'
import { routesCharacter } from 'modules/character/character.routes'
import { routesHome } from 'modules/home/home.routes'

const routes = [...routesHome, ...routesCharacter, ...routesBattle]

export default function Routes () {
  return (
    <>
      <Switch>
        {routes.map(rt => (
          <Route key={rt.name} exact path={rt.path} component={rt.component} name={rt.name} public={rt.public} />
        ))}
      </Switch>
    </>
  )
}
