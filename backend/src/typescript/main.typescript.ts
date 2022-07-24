import { FastifyInstance } from 'fastify';

import { IAuthController } from './controllers/auth-contoller.typescript';
import { IAuthModel } from './models/auth-model.typescript';
import { ServerEntities, ServerLayers } from './enums.typescript';

export interface IServerInstance extends FastifyInstance {
  [ServerLayers.Controllers]: {
    [ServerEntities.Auth]: IAuthController;
  };
  [ServerLayers.Models]: {
    [ServerEntities.Auth]: IAuthModel;
  };
}
