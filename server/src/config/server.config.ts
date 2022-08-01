export const SERVER_VERSION: string = 'v1';
export const SERVER_LABEL: string = 'api';
export const SERVER_PORT: number = Number(process.env.PORT) || 3000;
export const SERVER_PREFIX: string = `/${SERVER_LABEL}/${SERVER_VERSION}`;
