const Ajv = require('ajv');
const ajv = new Ajv();
const instructorSchema = {
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
const validateInstructor = (req, res, next) => {
  const validate = ajv.compile(instructorSchema);
  const isValid = validate(req.body);
  if (!isValid) {
    res.status(400).json({ message: 'Invalid instructor data', errors: validate.errors });
  } else {
    next();
  }
};

module.exports = { validateInstructor };

