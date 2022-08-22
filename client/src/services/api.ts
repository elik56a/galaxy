import axios, { AxiosInstance } from 'axios';

import { SERVER_PORT, SERVER_PREFIX } from '@shared/config/app.config';
import { TOKEN_KEY } from '@shared/config/auth.config';

import { getItem } from '@client/utils/local-storage.util';

const api: AxiosInstance = axios.create({
  baseURL: `http://localhost:${SERVER_PORT}${SERVER_PREFIX}`,
});

const token = getItem(TOKEN_KEY);

api.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  ({ data }) => data,
  error => {
    return Promise.reject(error);
  }
);

export default api;
