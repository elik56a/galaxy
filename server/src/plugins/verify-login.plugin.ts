import { FastifyReply, FastifyRequest } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import { ServerAuthPlugins } from '@server/types/enums.type';
import { createGlobalPlugin } from '@server/utils/fastify.util';

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
