const Ajv_Instance = require('../../utils/ajv');
const reviewsSchema = {
  type: 'object',
  properties: {
    stars: { type: 'number' },
    text: { type: 'string' },
  },
  required: ['stars'],
};

const studentDTO = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      minLength: 3,
      maxLength: 20,
    },
    lastName: {
      type: 'string',
      minLength: 3,
      maxLength: 20,
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      minLength: 6,
    },
    role: {
      type: 'string',
      default: 'student',
    },
    phone: {
      type: 'string',
    },

  },
  required: [
    'firstName',
    'lastName',
    'email',
    'password',
    'role',
    'phone',
  ],
};

module.exports = Ajv_Instance.compile(studentDTO);
