import { SignIn, SignUp } from '../features/Auth';

export enum RoutePath {
  SignIn = '/signIn',
  SignUp = '/signUp',
}

export interface IRoute {
  path: RoutePath;
  component: () => JSX.Element;
}

export const routesArray: IRoute[] = [
  { path: RoutePath.SignIn, component: SignIn },
  { path: RoutePath.SignUp, component: SignUp },
];
