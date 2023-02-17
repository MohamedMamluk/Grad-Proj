const AdminModel = require('../admin/admin.model');

//Register user based on role, admin will be removed
const registerService = async (USER) => {
  switch (USER.role) {
    case 'admin':
      const user = await AdminModel.create(USER);
      return user;
    case 'student':
      break;
    case 'instructor':
      break;
    default:
      console.log('bara');
  }
};

const loginService = async (USER) => {
  const user = await AdminModel.findOne({ email: USER.email });
  return user;
};
module.exports = {
  registerService,
  loginService,
};
