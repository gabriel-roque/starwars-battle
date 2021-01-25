import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import new modules routes here
import { routesHome } from 'modules/home/routes';

// Combine new modules routes here
const routes = [...routesHome];

export default function Routes () {
  return (
    <>
      <Switch>
        {routes.map(rt => (
          <Route key={rt.name} exact path={rt.path} component={rt.component} name={rt.name} public={rt.public} />
        ))}
      </Switch>
    </>
  );
}