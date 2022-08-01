import { IServerInstance } from '../typescript/main.typescript';
import { IAuthModel, ISimModel } from '../typescript/models.typescript';
import { MOCK_USER } from '../mocks/users.mock';

const simModel = (server: IServerInstance): ISimModel => ({
  activation: async ({ simId }) => {
    try {
      // @ example to db connection
      //const isActivate = await server.db('SELECT * FROM ...')
      return new Promise(resolve => {
        setTimeout(() => resolve(true), 10);
      });
    } catch (e) {
      console.error(e);
    }
  },
  cancellation: async ({ simId, timeToCancel }) => {
    try {
      return new Promise(resolve => {
        setTimeout(() => resolve(true), 10);
      });
    } catch (e) {
      console.error(e);
    }
  },
});

export default simModel;
