import createServer from './src/server';

const PORT = 3000;
const server = createServer();

const start: () => Promise<void> = async () => {
  try {
    await server.listen({ port: PORT });
  } catch (err) {
    console.error(err);
    server.log.error(err);
    process.exit(1);
  }
};
start().then(() => console.log(`Server is listening on port ${PORT}`));
