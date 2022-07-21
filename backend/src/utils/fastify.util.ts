import { IServerInstance } from '../typescript/main.typescript';
import { AppLayersNames } from '../typescript/enums.typescript';

export const createGlobalPlugin = (
  server: IServerInstance,
  done,
  pluginName: AppLayersNames,
  pluginValue: any
) => {
  server.decorate(pluginName, pluginValue);
  return done();
};
