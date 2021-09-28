import { Route, Switch } from 'react-router';
import { IRoute, routesArray } from './Routing';

export const App = (): JSX.Element => {
  return (
    <Switch>
      {
        routesArray.map((route: IRoute) => {
          return (
            <Route exact path={route.path} component={route.component}/>
          );
        })
      }
    </Switch>
  );
}
