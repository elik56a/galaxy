import path from 'path';
import fastify, { FastifyInstance } from 'fastify';
import AutoLoad from '@fastify/autoload';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';

import { swaggerConfig } from './config/plugins.config';

export const createServer = (): FastifyInstance => {
  const server: FastifyInstance = fastify({ logger: false });

  // register external plugins
  server.register(cors);
  server.register(swagger, swaggerConfig);

  //This loads all plugins defined in provide dir
  server.register(AutoLoad, { dir: path.join(__dirname, 'routes') });

  // server.register(AutoLoad, {
  //   dir: path.join(__dirname, 'plugins'),
  // });

  // all others plugins
  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  return server;
};

export default createServer;
