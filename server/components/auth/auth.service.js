const { StatusCodes } = require('http-status-codes');
const AdminModel = require('../admin/admin.model');
const StudentModel = require('../student/student.model');
const InstructorModel = require('../instructor/instructor.model');
const jwt = require('jsonwebtoken');
const { sendConfirmationEmail } = require('../../utils/nodemailer');
//Register user based on role, admin will be removed
const registerService = async (USER) => {
  const token = jwt.sign({ email: USER.email }, process.env.JWT_SECRET);
  switch (USER.role) {
    case 'admin':
      return await AdminModel.create(USER);
    case 'student':
      const newStudent = new StudentModel({ ...USER, confirmationCode: token });
      await sendConfirmationEmail(
        newStudent.firstName,
        newStudent.email,
        newStudent.confirmationCode
      );
      return await newStudent.save();
    case 'instructor':
      const newInstructor = new InstructorModel({
        ...USER,
        confirmationCode: token,
      });
      await sendConfirmationEmail(
        newInstructor.firstName,
        newInstructor.email,
        newInstructor.confirmationCode
      );

      return await newInstructor.save();
    default:
    //console.log('bara');
  }
};

const loginService = async (USER) => {
  switch (USER.role) {
    case 'admin':
      return AdminModel.findOne({ email: USER.email });
    case 'student':
      console.log('student');
      return StudentModel.findOne({ email: USER.email });
    case 'instructor':
      return InstructorModel.findOne({ email: USER.email });
    default:
    //console.log('Please Register');
  }
};

const verifyUser = (...models) => {
  return async (req, res, next) => {
    // Get the user data from the request body
    const { confirmationCode } = req.params;

    // Loop through the models and check if the user exists
    let userExists = false;
    for (const Model of models) {
      const user = await Model.findOne({ confirmationCode });
      //If user is found add role property to the req.body
      if (user) {
        console.log('here');
        userExists = true;
        user.status = 'Active';
        await Model.findByIdAndUpdate(user._id, user, {
          new: true,
        });
        return next();
      }
    }

    // If a user doesn't exist, return an error
    if (!userExists) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Please register first',
      });
    }
  };
};

module.exports = {
  registerService,
  loginService,
  verifyUser,
};
