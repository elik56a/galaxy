import fastifyPlugin from 'fastify-plugin';

import { IServerInstance } from '../typescript/main.typescript';
import { IAuthModel } from '../typescript/models/auth-model.typescript';
import { AppLayersNames } from '../typescript/enums.typescript';
import { createGlobalPlugin } from '../utils/fastify.util';

const createAuthModel = (server: IServerInstance): IAuthModel => ({
  login: async ({ password, userName }) => {
    try {
      // THIS IS AN EXAMPLE - LIKE GET DATA FROM DB
      return new Promise(resolve => {
        setTimeout(() => resolve(true), 2000);
      });
    } catch (e) {
      console.error(e);
    }
  },
  forgetPassword: async ({ userName, email }) => {
    try {
      return new Promise(resolve => {
        setTimeout(() => resolve(true), 2000);
      });
    } catch (e) {
      console.error(e);
    }
  },
});

const authModel = (server: IServerInstance, options, done) => {
  return createGlobalPlugin(server, done, AppLayersNames.Models, {
    ...server[AppLayersNames.Models],
    auth: createAuthModel(server),
  });
};

export default fastifyPlugin(authModel);
