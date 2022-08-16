import fastifyPlugin from 'fastify-plugin';

import { createGlobalPlugin } from '@server/utils/fastify.util';
import { IServerInstance } from '@server/types/main.type';
import { ServerEntities, ServerLayers } from '@server/types/enums.type';
import authModel from './auth.model';
import simModel from './sim.model';

const serverModels = (server: IServerInstance, options, done) =>
  createGlobalPlugin(server, done, ServerLayers.Models, {
    [ServerEntities.Auth]: authModel(server),
    [ServerEntities.Sim]: simModel(server),
  });

export default fastifyPlugin(serverModels);
