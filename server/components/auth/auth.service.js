const AdminModel = require('../admin/admin.model');
const StudentModel = require('../student/student.model');
const InstructorModel = require('../instructor/instructor.model');

//Register user based on role, admin will be removed
const registerService = async (USER) => {
  let user;
  switch (USER.role) {
    case 'admin':
      user = await AdminModel.create(USER);
      return user;
    case 'student':
      user = await StudentModel.create(USER);
      return user;
    case 'instructor':
      user = await InstructorModel.create(USER);
      return user;
    default:
      console.log('bara');
  }
};

const loginService = async (USER) => {
  switch (USER.role) {
    case 'admin':
      return AdminModel.findOne({ email: USER.email });
    case 'student':
      console.log('in Student service');
      console.log(USER);

      return StudentModel.findOne({ email: USER.email });
    case 'instructor':
      console.log('in instructor service');
      console.log(USER);
      return InstructorModel.findOne({ email: USER.email });

    default:
      console.log('Please Register');
  }
};
module.exports = {
  registerService,
  loginService,
};
