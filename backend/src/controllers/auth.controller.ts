import fastifyPlugin from 'fastify-plugin';

import { IServerInstance } from '../typescript/main.typescript';
import { IAuthController } from '../typescript/controllers/auth-contoller.typescript';
import { AppLayersNames } from '../typescript/enums.typescript';
import { createGlobalPlugin } from '../utils/fastify.util';

const createAuthController = (server: IServerInstance): IAuthController => ({
  login: async req => {
    try {
      const { userName, password } = req.body;
      const isValid = await server.models.auth.login(userName, password);

      return {
        isValid,
      };
    } catch (e) {
      console.error(e);
    }
  },
  forgetPassword: async req => {
    try {
      const { userName, email } = req.body;
      const isSuccess = await server.models.auth.forgetPassword(
        userName,
        email
      );

      return {
        isSuccess,
      };
    } catch (e) {
      console.error(e);
    }
  },
});

const authController = (server: IServerInstance, options, done) =>
  createGlobalPlugin(server, done, AppLayersNames.Controllers, {
    ...server[AppLayersNames.Controllers],
    auth: createAuthController(server),
  });

export default fastifyPlugin(authController);
