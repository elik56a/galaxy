import { FastifyRequest } from 'fastify';
import { IUser } from '../entities/user.typescript';

// activation
export interface IRequestActivation extends FastifyRequest {
  body: IActivationBody;
}

export interface IActivationBody {
  simId: string | number;
}

export interface IReplayActivation {
  isValid: boolean;
}

// cancellation

export interface IRequestCancellation extends FastifyRequest {
  body: ICancellationBody;
}

export interface ICancellationBody {
  simId: string | number;
  timeToCancel?: string;
}

export interface IReplayCancellation {
  isValid: boolean;
}
