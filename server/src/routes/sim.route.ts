import { SIM_ROUTES } from '@shared/config/routes.config';
import {
  IActivationBody,
  ICancellationBody,
  IReplayActivation,
  IReplayCancellation,
} from '@shared/types';

import { IServerInstance } from '@server/types/main.type';

const simRoute = (server: IServerInstance, options, done) => {
  // route validation
  server.addHook('onRequest', server.verifyLogin);
  //  sim activation
  server.post<{ Body: IActivationBody; Reply: IReplayActivation }>(
    SIM_ROUTES.ACTIVATION,
    server.controllers.sim.activation
  );
  // // sim cancellation
  server.post<{ Body: ICancellationBody; Reply: IReplayCancellation }>(
    SIM_ROUTES.CANCELLATION,
    server.controllers.sim.cancellation
  );

  done();
};

export default simRoute;
