import App from '../../App';

enum RoutePath {
  HomePage = '/',
}

export interface IRoute {
  path: string;
  component: () => JSX.Element;
}

export const routesArray: IRoute[] = [
  { path: RoutePath.HomePage, component: App },
];
