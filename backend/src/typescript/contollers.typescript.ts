export interface IAuthController {
  login: (req: any, replay: any) => Promise<boolean>;
}

