import { IServerInstance } from '@server/types/main.type';
import {
  ServerAuthPlugins,
  ServerLayers,
  ServerPlugins,
} from '@server/types/enums.type';

export const createGlobalPlugin = (
  server: IServerInstance,
  done,
  pluginName: ServerAuthPlugins | ServerLayers | ServerPlugins,
  pluginValue: any
) => {
  server.decorate(pluginName, pluginValue);
  done();
};
