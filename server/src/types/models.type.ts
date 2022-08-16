import {
  IForgetPasswordBody,
  ILoginBody,
  IUser,
  IActivationBody,
  ICancellationBody,
} from '@shared/types';

export interface IAuthModel {
  login: (params: ILoginBody) => Promise<IUser>;
  forgetPassword: (params: IForgetPasswordBody) => Promise<boolean>;
}
export interface ISimModel {
  activation: (params: IActivationBody) => Promise<boolean>;
  cancellation: (params: ICancellationBody) => Promise<boolean>;
}
