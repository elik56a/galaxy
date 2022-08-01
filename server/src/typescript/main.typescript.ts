import { FastifyInstance } from 'fastify';
import { IAuthController, ISimController } from './controllers.typescript';

import {
  ServerAuthPlugins,
  ServerEntities,
  ServerLayers,
  ServerPlugins,
} from './enums.typescript';
import { IAuthModel, ISimModel } from './models.typescript';

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
}
