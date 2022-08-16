import { IServerInstance } from '@server/types/main.type';
import { ISimModel } from '@server/types/models.type';

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
