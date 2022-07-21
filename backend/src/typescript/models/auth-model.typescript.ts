export interface IAuthModel {
  login: (password: string, userName: string) => Promise<boolean>;
  forgetPassword: (userName: string, email: string) => Promise<boolean>;
}
