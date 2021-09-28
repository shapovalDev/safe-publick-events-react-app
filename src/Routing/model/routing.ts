import { App } from '../../App'

enum RoutePath {
  SignIn = '/signIn',
  SignOut = '/signOut',
  HomePage = '/'
}

export interface IRoute {
  path: string,
  component: any,
}

export const routesArray: IRoute[] = [
  { path: RoutePath.HomePage, component: App },
]