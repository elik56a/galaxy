import path from 'path';
import fastify, { FastifyInstance } from 'fastify';
import AutoLoad from '@fastify/autoload';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import jwt from '@fastify/jwt';

import {
  LOGGER_OPTIONS,
  SWAGGER_OPTIONS,
} from '@server/config/external-plugins.config';
import { SERVER_PREFIX } from '@shared/config/app.config';
import { CREDENTIALS } from '@server/config/env.config';
import { ServerLayers, ServerPlugins } from '@server/types/enums.type';
import { IServerInstance } from '@server/types/main.type';

export const createServer = (): IServerInstance => {
  const server: FastifyInstance = fastify({
    // ...LOGGER_OPTIONS,
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
    reply.status(400).send({ error });
  });

  return server as IServerInstance;
};

export default createServer;
