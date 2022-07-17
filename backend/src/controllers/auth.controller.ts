import { FastifyReply, FastifyRequest } from 'fastify';

import authModel from '../models/auth.model';
import { IAuthController } from '../typescript/contollers.typescript';

const authController: IAuthController = {
  login: async (req, replay) => {
    const { userName, password } = req.body;
    const isValid = await authModel.login(userName, password); //@ access DB via model
    return replay.status(200).send({
      isValid,
    });
  },
};

export default authController;
