import { SignIn, SignUp } from '../features/Auth';
import { CreateEvent } from '../features/Event';
import { Home } from '../features/Home';
import { ProfilePage } from '../features/Profile';

export interface IRoute {
  path: RoutePath;
  component: () => JSX.Element;
}

export enum RoutePath {
  Home = '/',
  CreateEvent = '/createEvent',
  Profile = '/profile',
  SignIn = '/signIn',
  SignUp = '/signUp',
}

export const routesArray: IRoute[] = [
  { path: RoutePath.Home, component: Home },
  { path: RoutePath.CreateEvent, component: CreateEvent },
  { path: RoutePath.Profile, component: ProfilePage },
  { path: RoutePath.SignIn, component: SignIn },
  { path: RoutePath.SignUp, component: SignUp },
];
