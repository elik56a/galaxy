import fastifyPlugin from 'fastify-plugin';

import { createGlobalPlugin } from '@server/utils/fastify.util';
import { CREDENTIALS } from '@server/config/env.config';
import { ServerPlugins } from '@server/types/enums.type';
import { IServerInstance } from '@server/types/main.type';

const createEnvConfigPlugin = (server: IServerInstance, options, done) =>
  createGlobalPlugin(server, done, ServerPlugins.Config, CREDENTIALS);

export default fastifyPlugin(createEnvConfigPlugin);
