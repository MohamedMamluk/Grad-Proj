const { StatusCodes } = require('http-status-codes');
const validateInstructor = require('../components/instructor/instructorDTO');
const validateStudent = require('../components/student/studentDTO');
const registerValidation = (req, res, next) => {
  //console.log(req.body)
  const bodyData = req.body;
  let valid;
  let errors;
  switch (bodyData.role) {
    case 'student':
      valid = validateStudent(bodyData);
      errors = validateStudent.errors;
      break;
    case 'instructor':
      valid = validateInstructor(bodyData);
      errors = validateInstructor.errors;
      break;
    default:
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: 'failure',
        data: [],
        errors: ['Role is not provided'],
      });
  }
  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      status: 'failure',
      data: [],
      errors: errors.reduce((acc, curr) => {
        acc.push(curr.message);
        return acc;
      }, []),
    });
  }

  return next();
};

module.exports = registerValidation;
