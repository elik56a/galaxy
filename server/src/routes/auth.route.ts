import { AUTH_ROUTES } from '../config/routes.config';
import {
  POST_FORGET_PASSWORD_SCHEMA,
  POST_LOGIN_SCHEMA,
} from '../schemas/auth.schema';
import { IServerInstance } from '../typescript/main.typescript';
import {
  ILoginBody,
  IReplayLogin,
  IForgetPasswordBody,
  IReplayForgetPassword,
} from '../typescript/routes/auth-route.typescript';

const authRoute = (server: IServerInstance, options, done) => {
  // login
  server.post<{
    Body: ILoginBody;
    Reply: IReplayLogin;
  }>(AUTH_ROUTES.LOGIN, POST_LOGIN_SCHEMA, server.controllers.auth.login);
  // forget password
  server.post<{ Body: IForgetPasswordBody; Replay: IReplayForgetPassword }>(
    AUTH_ROUTES.FORGET_PASSWORD,
    POST_FORGET_PASSWORD_SCHEMA,
    server.controllers.auth.forgetPassword
  );

  done();
};

export default authRoute;
