import { IServerInstance } from '../typescript/main.typescript';
import {
  ServerAuthPlugins,
  ServerLayers,
  ServerPlugins,
} from '../typescript/enums.typescript';

export const createGlobalPlugin = (
  server: IServerInstance,
  done,
  pluginName: ServerAuthPlugins | ServerLayers | ServerPlugins,
  pluginValue: any
) => {
  server.decorate(pluginName, pluginValue);
  done();
};
