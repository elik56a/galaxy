import { FastifyReply, FastifyRequest } from 'fastify';
import {
  IReplayForgetPassword,
  IReplayLogin,
  IRequestForgetPassword,
  IRequestLogin,
} from '../../../shared/types/routes/auth-route.types';
import {
  IReplayActivation,
  IReplayCancellation,
  IRequestActivation,
  IRequestCancellation,
} from '../../../shared/types/routes/sim-route.types';

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
