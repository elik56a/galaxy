import {
  IForgetPasswordBody,
  ILoginBody,
} from './routes/auth-route.typescript';
import { IUser } from './entities/user.typescript';
import {
  IActivationBody,
  ICancellationBody,
} from './routes/sim-route.typescript';

export interface IAuthModel {
  login: (params: ILoginBody) => Promise<IUser>;
  forgetPassword: (params: IForgetPasswordBody) => Promise<boolean>;
}
export interface ISimModel {
  activation: (params: IActivationBody) => Promise<boolean>;
  cancellation: (params: ICancellationBody) => Promise<boolean>;
}
