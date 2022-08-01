export enum ServerLayers {
  Routes = 'routes',
  Controllers = 'controllers',
  Models = 'models',
}

export enum ServerEntities {
  Auth = 'auth',
  User = 'user',
  Sim = 'sim',
}

export enum ServerAuthPlugins {
  verifyLogin = 'verifyLogin',
  verifyAdmin = 'verifyAdmin',
}

export enum ServerPlugins {
  Plugins = 'plugins',
  Config = 'config',
}

export enum ServerMode {
  Dev = 'dev',
  Prod = 'prod',
}
