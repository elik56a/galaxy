import { FastifyInstance } from 'fastify';

import { IAuthController } from './controllers/auth-contoller.typescript';
import { IAuthModel } from './models/auth-model.typescript';
import { AppEntitiesName, AppLayersNames } from './enums.typescript';

export interface IServerInstance extends FastifyInstance {
  [AppLayersNames.Controllers]: {
    [AppEntitiesName.Auth]: IAuthController;
  };
  [AppLayersNames.Models]: {
    [AppEntitiesName.Auth]: IAuthModel;
  };
}
