export const SWAGGER_OPTIONS: Record<string, any> = {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'New Charges API DOCS ',
      description: 'New Charges API DOCS ',
      version: '1.0.0',
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'Auth Routes', description: 'auth user related end-points' },
    ],
    definitions: {
      User: {
        type: 'object',
        required: ['id', 'email'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          email: { type: 'string', format: 'email' },
        },
      },
    },
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'apiKey',
        in: 'header',
      },
    },
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request, reply, done) {
      done();
    },
    preHandler: function (request, reply, done) {
      done();
    },
  },
  staticCSP: true,
  transformStaticCSP: header => header,
  exposeRoute: true,
};

const routes = {
  AUTH: '/auth',
};
