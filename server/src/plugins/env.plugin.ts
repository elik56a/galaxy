import fastifyPlugin from 'fastify-plugin';

import { ServerPlugins } from '../typescript/enums.typescript';
import { createGlobalPlugin } from '../utils/fastify.util';
import { CREDENTIALS } from '../config/env.config';
import { IServerInstance } from '../typescript/main.typescript';

const createEnvConfigPlugin = (server: IServerInstance, options, done) =>
  createGlobalPlugin(server, done, ServerPlugins.Config, CREDENTIALS);

export default fastifyPlugin(createEnvConfigPlugin);
