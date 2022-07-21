import { FastifyReply } from 'fastify';

import {
  IRequestForgetPassword,
  IRequestLogin,
  IResponseForgetPassword,
  IResponseLogin,
} from '../routes/auth-route.typescript';

export interface IAuthController {
  login: (req: IRequestLogin, replay: FastifyReply) => Promise<IResponseLogin>;
  forgetPassword: (
    req: IRequestForgetPassword,
    replay: FastifyReply
  ) => Promise<IResponseForgetPassword>;
}
