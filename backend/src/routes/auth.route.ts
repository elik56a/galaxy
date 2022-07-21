import { AUTH_ROUTES } from '../config/routes.config';
import {
  postForgetPasswordSchema,
  postLoginSchema,
} from '../schema/auth-route.schema';
import { IServerInstance } from '../typescript/main.typescript';

const authRoute = (server: IServerInstance, options, done) => {
  server.post(
    AUTH_ROUTES.LOGIN,
    postLoginSchema,
    server.controllers.auth.login
  );
  server.post(
    AUTH_ROUTES.FORGET_PASSWORD,
    postForgetPasswordSchema,
    server.controllers.auth.forgetPassword
  );

  done();
};

export default authRoute;
