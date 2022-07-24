import path from 'path';
import fastify, { FastifyInstance } from 'fastify';
import AutoLoad from '@fastify/autoload';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';

import {
  LOGGER_OPTIONS,
  SWAGGER_OPTIONS,
} from './config/external-plugins.config';
import { API_PREFIX } from './config/app.config';
import { ServerLayers } from './typescript/enums.typescript';

export const createServer = (): FastifyInstance => {
  const server: FastifyInstance = fastify({
    ...LOGGER_OPTIONS,
    // @todo -config logger to br daily rotate
    // @todo -config schemaErrorFormatter as well
  });

  // register external plugins
  server.register(cors);
  server.register(swagger, SWAGGER_OPTIONS);

  //This loads all plugins defined in provide dir
  server.register(AutoLoad, {
    dir: path.join(__dirname, ServerLayers.Models),
  });
  server.register(AutoLoad, {
    dir: path.join(__dirname, ServerLayers.Controllers),
  });
  server.register(AutoLoad, {
    dir: path.join(__dirname, ServerLayers.Routes),
    options: { prefix: API_PREFIX },
  });

  // server.register(AutoLoad, {
  //   dir: path.join(__dirname, 'plugins'),
  // });
  server.setErrorHandler((error, req, reply) => {
    req.log.error(error.toString());
    reply.send({ error });
  });

  return server;
};

export default createServer;
