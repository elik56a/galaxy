import fastifyPlugin from 'fastify-plugin';

import { createGlobalPlugin } from '../utils/fastify.util';
import authModel from './auth.model';
import simModel from './sim.model';
import { IServerInstance } from '../typescript/main.typescript';
import { ServerEntities, ServerLayers } from '../typescript/enums.typescript';

const serverModels = (server: IServerInstance, options, done) =>
  createGlobalPlugin(server, done, ServerLayers.Models, {
    [ServerEntities.Auth]: authModel(server),
    [ServerEntities.Sim]: simModel(server),
  });

export default fastifyPlugin(serverModels);
