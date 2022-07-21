import { FastifyRequest } from 'fastify';

// login
export interface IRequestLogin extends FastifyRequest {
  body: {
    userName: string;
    password: string;
  };
}
export interface IResponseLogin {
  isValid: boolean;
}

// forgerPassword
export interface IRequestForgetPassword extends FastifyRequest {
  body: {
    userName: string;
    email: string;
  };
}
export interface IResponseForgetPassword {
  isSuccess: boolean;
}
