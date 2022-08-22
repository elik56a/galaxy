import { FastifyRequest } from 'fastify';
import { ResetPasswordSendOptions } from '../entities/auth.type';

import { IUser } from '../index';

// login
export interface IRequestLogin extends FastifyRequest {
  body: ILoginBody;
}

export interface ILoginBody {
  userName: string;
  password: string;
}

export interface IChangePasswordBody {
  password: string;
}

export interface IRoleBody {
  role: string;
}

export interface IResetPasswordBody {
  selectedResetOption: ResetPasswordSendOptions;
}

export interface IChangePasswordBody {
  password: string;
}

export interface IReplayLogin {
  user: IUser;
  token: string;
}

// forget password
export interface IRequestForgetPassword extends FastifyRequest {
  body: IForgetPasswordBody;
}

export interface IForgetPasswordBody {
  userName: string;
  email: string;
}

export interface IReplayForgetPassword {
  isSuccess: boolean;
}
