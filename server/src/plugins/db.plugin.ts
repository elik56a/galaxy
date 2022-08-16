import fastifyPlugin from 'fastify-plugin';
import oracledb from 'oracledb';

import { createGlobalPlugin } from '@server/utils/fastify.util';
import { IDbPlugin } from '@server/types/plugins.type';
import { IServerInstance } from '@server/types/main.type';
import { ServerPlugins } from '@server/types/enums.type';
import { CREDENTIALS } from '@server/config/env.config';

const initDb = async (): Promise<void> => {
  try {
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

    await oracledb.createPool({
      user: CREDENTIALS.DB.USER_NAME,
      password: CREDENTIALS.DB.PASSWORD,
      connectString: CREDENTIALS.DB.DB_URL,
    });
  } catch (err) {
    console.error('init() error: ' + err.message);
  } finally {
    await closePool();
  }
};

const closePool = async (): Promise<void> => {
  try {
    await oracledb.getPool().close(10);
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const dbPlugin: IDbPlugin = {
  query: async ({ sql, binds, options }) => {
    let connection: any;
    try {
      console.log(sql);
      // Get a connection from the default pool
      connection = await oracledb.getConnection();
      const result = await connection.execute(sql, binds, options);

      return result;
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          // Put the connection back in the pool
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  },
};

const createDbPlugin = async (server: IServerInstance, options, done) => {
  //@todo  uncomment if you have db on machine --->  await initDb();
  return createGlobalPlugin(server, done, ServerPlugins.Db, dbPlugin);
};

export default fastifyPlugin(createDbPlugin);
