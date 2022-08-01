import { FastifyRequest } from 'fastify';
import { IUser } from '../entities/user.typescript';

// login
export interface IRequestLogin extends FastifyRequest {
  body: ILoginBody;
}

export interface ILoginBody {
  userName: string;
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
