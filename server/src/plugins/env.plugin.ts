import fastifyPlugin from 'fastify-plugin';

import { ServerPlugins } from '../typescript/enums.typescript';
import { createGlobalPlugin } from '../utils/fastify.util';
import { CREDENTIALS } from '../config/env.config';

const createEnvConfigPlugin = (server, options, done) =>
  createGlobalPlugin(server, done, ServerPlugins.Config, CREDENTIALS);

export default fastifyPlugin(createEnvConfigPlugin);
