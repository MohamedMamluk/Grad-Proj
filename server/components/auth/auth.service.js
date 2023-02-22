const AdminModel = require('../admin/admin.model');
const StudentModel = require('../student/student.model')

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
      break;
    default:
      console.log('bara');
  }
};

const loginService = async (USER) => {
  switch (USER.role) {
    case "admin":
      let user = await AdminModel.findOne({ email: USER.email });
      return user;
    case 'student':
      user = await StudentModel.findOne({ email: USER.email });
      return user;
    default:
      console.log('Please Register');
  }

};
module.exports = {
  registerService,
  loginService,
};
