import React from 'react';
import { Route, Switch } from 'react-router';
import { IRoute, routesArray } from './model/Routing';

const App = (): JSX.Element => {
  return (
    <Switch>
      {routesArray.map((route: IRoute) => {
        return (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};

export default App;
