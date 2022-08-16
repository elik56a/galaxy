import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

import { ServerMode } from '@server/types/enums.type';

// @todo - make correct interface for this object
export const SERVER_CREDENTIALS: Record<ServerMode, any> = {
  [ServerMode.Dev]: {
    SERVER: {
      SECRET_JWT: '3safaer3qreafdjfiaefu4whf2iuenfjkqenrkjnqkej',
    },
    DB: {
      USER_NAME: 'telzar_app',
      PASSWORD: 'qazwsx',
      DB_URL: '10.20.110.20:1521/DBIDB',
    },
  },
  [ServerMode.Prod]: {
    SERVER: {
      SECRET_JWT: '3safaer3qreafdjfiaefu4whf2iuenfjkqenrkjnqkej',
    },
    DB: {
      USER_NAME: 'Prod',
      PASSWORD: '',
      DB_URL: '',
    },
  },
};

export const CREDENTIALS = SERVER_CREDENTIALS[process.env.NODE_ENV];
