const AdminModel = require('../admin/admin.model');
const StudentModel = require('../student/student.model');
const InstructorModel = require('../instructor/instructor.model');

//Register user based on role, admin will be removed
const registerService = async (USER) => {
  switch (USER.role) {
    case 'admin':
      return await AdminModel.create(USER);
    case 'student':
      return await StudentModel.create(USER);
    case 'instructor':
      return await InstructorModel.create(USER);
    default:
      console.log('bara');
  }
};

const loginService = async (USER) => {
  switch (USER.role) {
    case 'admin':
      return AdminModel.findOne({ email: USER.email });
    case 'student':
      return StudentModel.findOne({ email: USER.email });
    case 'instructor':
      return InstructorModel.findOne({ email: USER.email });

    default:
      console.log('Please Register');
  }
};
module.exports = {
  registerService,
  loginService,
};
