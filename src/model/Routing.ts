import { SignIn, SignUp } from '../features/Auth';
import { Screen } from '../features/Screen';

export enum RoutePath {
  Home = '/',
  SignIn = '/signIn',
  SignUp = '/signUp',
}

export interface IRoute {
  path: RoutePath;
  component: () => JSX.Element;
}

export const routesArray: IRoute[] = [
  // @ts-ignore
  { path: RoutePath.Home, component: Screen },
  { path: RoutePath.SignIn, component: SignIn },
  { path: RoutePath.SignUp, component: SignUp },
];
