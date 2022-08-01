import path from 'path';
import fastify, { FastifyInstance } from 'fastify';
import AutoLoad from '@fastify/autoload';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import jwt from '@fastify/jwt';

import {
  LOGGER_OPTIONS,
  SWAGGER_OPTIONS,
} from './config/external-plugins.config';
import { SERVER_PREFIX } from './config/server.config';
import { CREDENTIALS } from './config/env.config';
import { ServerLayers, ServerPlugins } from './typescript/enums.typescript';
import { IServerInstance } from './typescript/main.typescript';

export const createServer = (): IServerInstance => {
  const server: FastifyInstance = fastify({
    ...LOGGER_OPTIONS,
    // @todo -config logger to be daily rotate
    // @todo -config schemaErrorFormatter as well
  });

  // register external plugins
  server.register(cors);
  server.register(swagger, SWAGGER_OPTIONS);
  server.register(jwt, { secret: CREDENTIALS.SERVER.SECRET_JWT });

  //This loads all plugins defined in provide dir
  server.register(AutoLoad, {
    dir: path.join(__dirname, ServerPlugins.Plugins),
  });
  server.register(AutoLoad, {
    dir: path.join(__dirname, ServerLayers.Models),
  });
  server.register(AutoLoad, {
    dir: path.join(__dirname, ServerLayers.Controllers),
  });
  server.register(AutoLoad, {
    dir: path.join(__dirname, ServerLayers.Routes),
    options: { prefix: SERVER_PREFIX },
  });

  server.setErrorHandler((error, req, reply) => {
    req.log.error(error.toString());
    reply.send({ error });
  });

  return server as IServerInstance;
};

export default createServer;
