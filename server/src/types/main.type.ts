import { FastifyInstance } from 'fastify';
import { JWT } from '@fastify/jwt';

import { IAuthController, ISimController } from './controllers.type';
import {
  ServerAuthPlugins,
  ServerEntities,
  ServerLayers,
  ServerPlugins,
} from './enums.type';
import { IAuthModel, ISimModel } from './models.type';
import { IDbPlugin } from './plugins.type';

export interface IServerInstance extends FastifyInstance {
  [ServerLayers.Controllers]: {
    [ServerEntities.Auth]: IAuthController;
    [ServerEntities.Sim]: ISimController;
  };
  [ServerLayers.Models]: {
    [ServerEntities.Auth]: IAuthModel;
    [ServerEntities.Sim]: ISimModel;
  };
  [ServerAuthPlugins.verifyLogin]: () => void;
  [ServerAuthPlugins.verifyAdmin]: () => void;
  [ServerPlugins.Config]: any;
  [ServerPlugins.Db]: IDbPlugin;
  jwt: JWT;
}
