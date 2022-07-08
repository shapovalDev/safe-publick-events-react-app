import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { IRoute, RoutePath, routesArray } from './model/Routing';
import { getLocalStorage } from './lib/LocalStorage';

const App = (): JSX.Element => {
  const [t] = useTranslation();
  const history = useHistory();
  const isAuth = getLocalStorage('accessToken');

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Router history={history}>
        <Switch>
          {routesArray.map((route: IRoute) => {
            return <Route key={route.path} exact path={route.path} component={route.component} />;
          })}
        </Switch>
        <Redirect to={isAuth ? RoutePath.Home : RoutePath.SignIn} />
      </Router>
    </LocalizationProvider>
  );
};

export default App;
