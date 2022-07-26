import {
  IForgetPasswordBody,
  ILoginBody,
} from '../routes/auth-route.typescript';

export interface IAuthModel {
  login: (params: ILoginBody) => Promise<boolean>;
  forgetPassword: (params: IForgetPasswordBody) => Promise<boolean>;
}
