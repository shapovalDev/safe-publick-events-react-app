import React, { useEffect, useState } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { IRoute, routesArray } from './model/Routing';
import { Screen } from './features/Screen';
import { getLocalStorage } from './lib/LocalStorage';

const App = (): JSX.Element => {
  const [auth, setAuth] = useState<string | null>('');
  const [t] = useTranslation();
  const history = useHistory();

  useEffect(() => {
    const token = getLocalStorage('accessToken');
    setAuth(token);
  }, []);

  return (
    <Router history={history}>
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
      <Redirect to={auth ? '/' : '/signIn'} />
    </Router>
  );
};

export default App;
