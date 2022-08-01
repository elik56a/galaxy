import createServer from './src/server';
import { SERVER_PORT } from './src/config/server.config';

const server = createServer();

const start: () => Promise<void> = async () => {
  try {
    await server.listen({ port: SERVER_PORT });
  } catch (err) {
    console.error(err);
    server?.log.error(err);
    process.exit(1);
  }
};
start().then(() => console.log(`Server is listening on port ${SERVER_PORT}`));
