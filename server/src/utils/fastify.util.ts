import { IServerInstance } from '../typescript/main.typescript';
import { ServerLayers } from '../typescript/enums.typescript';

export const createGlobalPlugin = (
  server: IServerInstance,
  done,
  pluginName: ServerLayers,
  pluginValue: any
) => {
  server.decorate(pluginName, pluginValue);
  return done();
};
