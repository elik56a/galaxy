import { SIM_ROUTES } from '../config/routes.config';

import { IServerInstance } from '../typescript/main.typescript';
import {
  IActivationBody,
  ICancellationBody,
  IReplayActivation,
  IReplayCancellation,
} from '../typescript/routes/sim-route.typescript';

const simRoute = (server: IServerInstance, options, done) => {
  // route validation
  server.addHook('onRequest', server.verifyLogin);
  //  sim activation
  server.post<{ Body: IActivationBody; Reply: IReplayActivation }>(
    SIM_ROUTES.ACTIVATION,
    server.controllers.sim.activation
  );
  // sim cancellation
  server.post<{ Body: ICancellationBody; Reply: IReplayCancellation }>(
    SIM_ROUTES.CANCELLATION,
    server.controllers.sim.cancellation
  );

  done();
};

export default simRoute;
