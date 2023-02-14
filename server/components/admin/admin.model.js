const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide an email'],
    },
    password: {
      type: String,
      minLength: 6,
    },
    role: {
      type: String,
      default: 'admin',
    },
  },
  { timestamps: true }
);

adminSchema.pre('save', async function () {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(this.password, salt);
    this.password = hashed;
  } catch (error) {
    console.log(error);
  }
});
// $2b$10$mMi4haNvuuleuUAYLsjbF.2eUaQPtaN/Rs7ittv.BLtPUilvNO6QO
// $2b$10$wDBOhQifG2WCG2./kUTEJOJKnLuMjy8N2pX7fkRzrr.wwsQvM4tAi
adminSchema.methods.comparePassword = async function (
  USER_PASSWORD_FROM_FRONT
) {
  console.log(USER_PASSWORD_FROM_FRONT == this.password);

  const isValid = bcrypt.compareSync(USER_PASSWORD_FROM_FRONT, this.password);
  return isValid;
};
module.exports = mongoose.model('admin', adminSchema);
