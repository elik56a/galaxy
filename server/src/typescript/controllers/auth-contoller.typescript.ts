import { FastifyReply } from 'fastify';

import {
  IRequestForgetPassword,
  IRequestLogin,
  IReplayForgetPassword,
  IReplayLogin,
} from '../routes/auth-route.typescript';

export interface IAuthController {
  login: (req: IRequestLogin, replay: FastifyReply) => Promise<IReplayLogin>;
  forgetPassword: (
    req: IRequestForgetPassword,
    replay: FastifyReply
  ) => Promise<IReplayForgetPassword>;
}
