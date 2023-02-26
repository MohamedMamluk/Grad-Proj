const Ajv_Instance = require('../../utils/ajv');
const instructorDTO = {
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
      default: 'instructor',
    },
    phone: {
      type: 'string',
    },
    levelOfExperience: {
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
    'levelOfExperience',
  ],
};

module.exports = Ajv_Instance.compile(instructorDTO);
