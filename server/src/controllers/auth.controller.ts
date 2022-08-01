import { IServerInstance } from '../typescript/main.typescript';
import { IAuthController } from '../typescript/controllers.typescript';

const authController = (server: IServerInstance): IAuthController => ({
  login: async (req, reply) => {
    try {
      const { userName, password } = req.body;
      const user = await server.models.auth.login({ userName, password });
      const token = server.jwt.sign({ ...user }, { expiresIn: '4h' });

      return reply.send({
        user,
        token,
      });
    } catch (e) {
      console.error(e);
    }
  },
  forgetPassword: async req => {
    try {
      const { userName, email } = req.body;
      const isSuccess = await server.models.auth.forgetPassword({
        userName,
        email,
      });

      return {
        isSuccess,
      };
    } catch (e) {
      console.error(e);
    }
  },
});

export default authController;
