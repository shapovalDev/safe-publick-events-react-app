import { SignIn } from '../features/Auth';
import { Home } from '../features/Home';

export enum RoutePath {
  HomePage = '/',
  SignIn = '/signIn',
  SignUp = '/signUp',
}

export interface IRoute {
  path: RoutePath;
  component: () => JSX.Element;
}

export const routesArray: IRoute[] = [
  { path: RoutePath.HomePage, component: Home },
  { path: RoutePath.SignIn, component: SignIn },
];
