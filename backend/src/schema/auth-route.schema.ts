export const postLoginSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['userName', 'password'],
      properties: {
        userName: {
          type: 'string',
          minLength: 1,
          maxLength: 20,
          // pattern: '^[0-9a-fA-F]{24}(,[0-9a-fA-F]{24})?', // we can add regex to scheme!!
        },
        password: { type: 'string', minLength: 1, maxLength: 12 },
      },
      additionalProperties: false,
    },
    response: {
      200: {
        type: 'object',
        properties: {
          isValid: { type: 'boolean' },
        },
      },
    },
  },
};

export const postForgetPasswordSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['userName', 'email'],
      properties: {
        userName: {
          type: 'string',
          minLength: 1,
          maxLength: 20,
          // pattern: '^[0-9a-fA-F]{24}(,[0-9a-fA-F]{24})?', // we can add regex to scheme!!
        },
        email: { type: 'string', minLength: 1, maxLength: 12 },
      },
      additionalProperties: false,
    },
    response: {
      200: {
        type: 'object',
        properties: {
          isSuccess: { type: 'boolean' },
        },
      },
    },
  },
};
