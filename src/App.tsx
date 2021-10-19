import React from 'react';
import { Route, Switch } from 'react-router';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IRoute, routesArray } from './model/Routing';
import { Screen } from './features/Screen';
import { getLocalStorage } from './lib/LocalStorage';

const App = (): JSX.Element => {
  const [t] = useTranslation();
  const isAuth: string | null =
    getLocalStorage('refreshToken') && getLocalStorage('accessToken');

  return (
    <>
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
      {isAuth && (
        <Screen>
          <Box>{t('signUp.title')}</Box>
        </Screen>
      )}
    </>
  );
};

export default App;
