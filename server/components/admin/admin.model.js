const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
adminSchema.methods.comparePassword = async function (
  USER_PASSWORD_FROM_FRONT
) {
  const isValid = bcrypt.compareSync(USER_PASSWORD_FROM_FRONT, this.password);
  return isValid;
};
adminSchema.methods.genJWT = function () {
  const token = jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  );
  return token;
};
module.exports = mongoose.model('admin', adminSchema);
