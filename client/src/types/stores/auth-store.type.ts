import { IUser } from '@shared/types/entities/user.type';
import {
  ILoginBody,
  IResetPasswordBody,
  IRoleBody,
  IChangePasswordBody,
} from '@shared/types';

interface IAuthStoreState {
  token: string | null;
  user: IUser | null;
}

export interface IAuthStore {
  state: () => IAuthStoreState;
  getters: {
    readonly isLoggedIn: (state: IAuthStoreState) => boolean;
  };
  actions: {
    login: (form: ILoginBody) => Promise<void>;
    back_to_start: () => Promise<void>;
    loginRole: (form: IRoleBody) => Promise<void>;
    resetPassword: (form: IResetPasswordBody) => Promise<void>;
    forget_password: () => Promise<void>;
    savePassword: (form: IChangePasswordBody) => Promise<void>;
  };
}
