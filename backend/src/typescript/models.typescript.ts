export interface IAuthModel {
    login: (password: string, userName: string) => Promise<boolean>;
}
