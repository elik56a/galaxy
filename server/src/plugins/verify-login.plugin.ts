import fastifyPlugin from 'fastify-plugin';

import { ServerAuthPlugins } from '../typescript/enums.typescript';
import { createGlobalPlugin } from '../utils/fastify.util';
import { FastifyReply, FastifyRequest } from 'fastify';

const verifyLogin = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    await request.jwtVerify();
  } catch ({ message, statusCode }) {
    reply.send({
      message,
      statusCode,
    });
  }
};

const createVerifyLoginPlugin = (server, options, done) =>
  createGlobalPlugin(server, done, ServerAuthPlugins.verifyLogin, verifyLogin);

export default fastifyPlugin(createVerifyLoginPlugin);
