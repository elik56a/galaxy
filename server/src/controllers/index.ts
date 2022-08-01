import fastifyPlugin from 'fastify-plugin';

import { createGlobalPlugin } from '../utils/fastify.util';
import simController from './sim.controller';
import authController from './auth.controller';
import { ServerEntities, ServerLayers } from '../typescript/enums.typescript';
import { IServerInstance } from '../typescript/main.typescript';

const serverControllers = (server: IServerInstance, options, done) =>
  createGlobalPlugin(server, done, ServerLayers.Controllers, {
    [ServerEntities.Auth]: authController(server),
    [ServerEntities.Sim]: simController(server),
  });

export default fastifyPlugin(serverControllers);
