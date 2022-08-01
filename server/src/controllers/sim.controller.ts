import { IServerInstance } from '../typescript/main.typescript';
import { ISimController } from '../typescript/controllers.typescript';

const simController = (server: IServerInstance): ISimController => ({
  activation: async (req, replay) => {
    try {
      const isValid = await server.models.sim.activation(req.body);
      return replay.send({
        isValid,
      });
    } catch (e) {
      console.error(e);
    }
  },
  cancellation: async (req, res) => {
    try {
      const isValid = await server.models.sim.cancellation(req.body);
      return res.send({
        isValid,
      });
    } catch (e) {
      console.error(e);
    }
  },
});

export default simController;
