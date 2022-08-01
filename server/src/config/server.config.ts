export const APP_VERSION: string = 'v1';
export const API_LABEL: string = 'api';
export const API_PORT: number = Number(process.env.PORT) || 3000;
export const API_PREFIX: string = `/${API_LABEL}/${APP_VERSION}`;
