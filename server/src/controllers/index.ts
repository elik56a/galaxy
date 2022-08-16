import fastifyPlugin from 'fastify-plugin';

import { createGlobalPlugin } from '@server/utils/fastify.util';
import { ServerEntities, ServerLayers } from '@server/types/enums.type';
import { IServerInstance } from '@server/types/main.type';
import simController from './sim.controller';
import authController from './auth.controller';

const serverControllers = (server: IServerInstance, options, done) =>
  createGlobalPlugin(server, done, ServerLayers.Controllers, {
    [ServerEntities.Auth]: authController(server),
    [ServerEntities.Sim]: simController(server),
  });

export default fastifyPlugin(serverControllers);
