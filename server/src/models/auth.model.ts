import { IServerInstance } from '../typescript/main.typescript';
import { IAuthModel } from '../typescript/models.typescript';
import { MOCK_USER } from '../mocks/users.mock';

const authModel = (server: IServerInstance): IAuthModel => ({
  login: async ({ password, userName }) => {
    try {
      // @ example to db connection
      //const user = await server.db('SELECT * FROM ...')
      return new Promise(resolve => {
        setTimeout(() => resolve(MOCK_USER), 10);
      });
    } catch (e) {
      console.error(e);
    }
  },
  forgetPassword: async ({ userName, email }) => {
    try {
      return new Promise(resolve => {
        setTimeout(() => resolve(true), 2000);
      });
    } catch (e) {
      console.error(e);
    }
  },
});

export default authModel;
