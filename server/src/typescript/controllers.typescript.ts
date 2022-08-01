import { FastifyReply, FastifyRequest } from 'fastify';
import {
  IReplayForgetPassword,
  IReplayLogin,
  IRequestForgetPassword,
  IRequestLogin,
} from './routes/auth-route.typescript';
import {
  IReplayActivation,
  IReplayCancellation,
  IRequestActivation,
  IRequestCancellation,
} from './routes/sim-route.typescript';

export interface IAuthController {
  login: (req: IRequestLogin, replay: FastifyReply) => Promise<IReplayLogin>;
  forgetPassword: (
    req: IRequestForgetPassword,
    replay: FastifyReply
  ) => Promise<IReplayForgetPassword>;
}

export interface ISimController {
  activation: (
    req: IRequestActivation,
    replay: FastifyReply
  ) => Promise<IReplayActivation>;
  cancellation: (
    req: IRequestCancellation,
    replay: FastifyReply
  ) => Promise<IReplayCancellation>;
}
