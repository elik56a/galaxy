import { AUTH_ROUTES } from '../config/routes.config';
import {
  postForgetPasswordSchema,
  postLoginSchema,
} from '../schemas/auth-route.schema';
import { IServerInstance } from '../typescript/main.typescript';
import {
  ILoginBody,
  IReplayLogin,
  IForgetPasswordBody,
  IReplayForgetPassword,
} from '../typescript/routes/auth-route.typescript';

const authRoute = (server: IServerInstance, options, done) => {
  server.post<{
    Body: ILoginBody;
    Reply: IReplayLogin;
  }>(AUTH_ROUTES.LOGIN, postLoginSchema, server.controllers.auth.login);
  server.post<{ Body: IForgetPasswordBody; Replay: IReplayForgetPassword }>(
    AUTH_ROUTES.FORGET_PASSWORD,
    postForgetPasswordSchema,
    server.controllers.auth.forgetPassword
  );

  done();
};

export default authRoute;
