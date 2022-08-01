import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

import { ServerMode } from '../typescript/enums.typescript';

// @todo - make correct interface for this object
export const SERVER_CREDENTIALS: Record<ServerMode, any> = {
  [ServerMode.Dev]: {
    SERVER: {
      SECRET_JWT: '3safaer3qreafdjfiaefu4whf2iuenfjkqenrkjnqkej',
    },
    DB: {
      USER_NAME: 'Dev',
      PASSWORD: '',
      DB_NAME: '',
      DB_URL: '',
    },
  },
  [ServerMode.Prod]: {
    SERVER: {
      SECRET_JWT: '3safaer3qreafdjfiaefu4whf2iuenfjkqenrkjnqkej',
    },
    DB: {
      USER_NAME: 'Prod',
      PASSWORD: '',
      DB_NAME: '',
      DB_URL: '',
    },
  },
};

export const CREDENTIALS = SERVER_CREDENTIALS[process.env.NODE_ENV];
