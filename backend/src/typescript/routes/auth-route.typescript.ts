import { FastifyRequest } from 'fastify';

// login
export interface IRequestLogin extends FastifyRequest {
  body: ILoginBody;
}

export interface ILoginBody {
  userName: string;
  password: string;
}

export interface IReplayLogin {
  isValid: boolean;
}

// forgerPassword
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
