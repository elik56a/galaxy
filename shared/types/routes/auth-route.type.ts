import { FastifyRequest } from 'fastify';

import { IUser } from '../index';

// login
export interface IRequestLogin extends FastifyRequest {
  body: ILoginBody;
}

export interface ILoginBody {
  userName: string;
  password: string;
}

export interface IRoleBody {
  role: string;
}

export interface IResetPasswordBody {
  optionsend: string;
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
