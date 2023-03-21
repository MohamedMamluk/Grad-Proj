const mongoose = require('mongoose');
// var DB_URL = "mongodb://127.0.0.1:27017/Students";
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const valid = require('validator');

const studentSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ['Pending', 'Active'],
      default: 'Pending',
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, 'please provide your first name'],
      minLength: 3,
      maxLength: 20,
    },
    lastName: {
      type: String,
      required: [true, 'please provide your last name'],
      minLength: 3,
      maxLength: 20,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      validate: {
        validator: (val) => {
          return valid.isEmail(val);
        },
        message: '{This email is not in a correct format}',
      },
    },
    password: {
      type: String,
      minLength: [6, 'Enter a password no less than 6 characters'],
      required: [true, 'Please provide an appropriate password'],
    },
    role: {
      type: String,
      required: [true, 'Please tell us your role'],
      default: 'student',
    },
    phone: {
      type: String,
      minLength: [11, 'Enter your Mobile phone number '],
      required: [true, 'Please provide a working number from your country'],
    },
    interests: {
      type: [String],
      default: [],
    },
    resetCode: {
      type: String,
      default: '0000',
    },
    favorites: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
    courses: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true }
);

studentSchema.pre('save', async function () {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(this.password, salt);
    this.password = hashed;
  } catch (error) {
    //console.log(error);
  }
});
studentSchema.methods.comparePassword = async function (
  USER_PASSWORD_FROM_FRONT
) {
  console.log(USER_PASSWORD_FROM_FRONT);
  console.log('password in db', this.password);
  const isValid = await bcrypt.compare(USER_PASSWORD_FROM_FRONT, this.password);
  return isValid;
};
studentSchema.methods.genJWT = function () {
  const token = jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    }
  );
  return token;
};

module.exports = mongoose.model('student', studentSchema);
