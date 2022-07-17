import { IAuthModel } from "../typescript/models.typescript";

const authModel: IAuthModel = {
  login: async (password, userName) => {
    // THIS IS AN EXMAPLE - LIKE GET DATA FROM DB
    return new Promise<boolean>(resolve => {
      setTimeout(() => resolve(true), 2000);
    });
  },
};

export default authModel;
