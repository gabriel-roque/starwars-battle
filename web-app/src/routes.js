import React from 'react';

import { Route, Switch } from 'react-router-dom';

import routesHome from 'modules/home/routes';
import routesAuth from 'modules/auth/routes';

const routes = [...routesHome, ...routesAuth];

export default function Routes() {
  const makeRoutes = () =>
    routes.map((rt, i) => (
      <Route
        key={i}
        exact
        path={rt.path}
        component={rt.component}
        name={rt.name}
      />
    ));

  return (
    <React.Fragment>
      <Switch>{makeRoutes()}</Switch>
    </React.Fragment>
  );
}
