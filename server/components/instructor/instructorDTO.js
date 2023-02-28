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
exports.validateInstructor = (req, res, next) => {
  const validate = ajv.compile(instructorDTO);
  const isValid = validate(req.body);
  if (!isValid) {
    res.status(400).json({ message: 'Invalid instructor data', errors: validate.errors });
  } else {
    next();
  }
};

module.exports =   Ajv_Instance.compile(instructorDTO)   

