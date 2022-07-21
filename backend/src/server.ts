import path from 'path';
import fastify, { FastifyInstance } from 'fastify';
import AutoLoad from '@fastify/autoload';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';

import { SWAGGER_OPTIONS } from './config/external-plugins.config';
import { API_BASE_PREFIX } from './config/app.config';
import { AppLayersNames } from './typescript/enums.typescript';

export const createServer = (): FastifyInstance => {
  const server: FastifyInstance = fastify({ logger: false });

  // register external plugins
  server.register(cors);
  server.register(swagger, SWAGGER_OPTIONS);

  //This loads all plugins defined in provide dir
  server.register(AutoLoad, {
    dir: path.join(__dirname, AppLayersNames.Models),
  });
  server.register(AutoLoad, {
    dir: path.join(__dirname, AppLayersNames.Controllers),
  });
  server.register(AutoLoad, {
    dir: path.join(__dirname, AppLayersNames.Routes),
    options: { prefix: API_BASE_PREFIX },
  });

  // server.register(AutoLoad, {
  //   dir: path.join(__dirname, 'plugins'),
  // });

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  return server;
};

export default createServer;
