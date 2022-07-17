import { FastifyInstance } from 'fastify';

import authController from '../controllers/auth.controller';
import { postLoginSchema } from '../schema/auth-route.schema';

export default async function authRoute(
  server: FastifyInstance,
  options,
  done
) {
  server.post('/auth/login', postLoginSchema , authController.login);

  // server.post('/login', postHealthSchema, async (req, replay) => {
  //   const { name } = req.body;
  //   replay.send({
  //     name: name + 'fdas',
  //   });
  // });

  done();
}
