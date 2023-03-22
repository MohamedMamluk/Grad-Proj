const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const instructorSchema = new mongoose.Schema(
  {
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
    email: {
      type: String,
      required: [true, 'Please provide an email'],
    },
    password: {
      type: String,
      minLength: [6, 'Enter a password no less than 6 characters'],
      required: [true, 'Please provide an appropriate password'],
    },
    role: {
      type: String,
      required: [true, 'Please tell us your role'],
      default: 'instructor',
    },
    phone: {
      type: String,
      required: [true, 'Please provide a working number from your country'],
    },
    courses: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
    levelOfExperience: {
      type: String,
      required: [true, 'Please provide a level of experience'],
    },
    image: {
      type: String,
    },
    balance: {
      type: [
        new mongoose.Schema(
          {
            cost: {
              type: Number,
            },
            courseId: {
              type: mongoose.Types.ObjectId,
            },
          },
          { timestamps: true }
        ),
      ],
      default: [],
    },
    status: {
      type: String,
      enum: ['Pending', 'Active'],
      default: 'Pending',
    },
    resetCode: {
      type: String,
      default: '0000',
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

instructorSchema.pre('save', async function () {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(this.password, salt);
    this.password = hashed;
  } catch (error) {
    //console.log(error);
  }
});
instructorSchema.methods.comparePassword = async function (
  USER_PASSWORD_FROM_FRONT
) {
  const isValid = await bcrypt.compare(USER_PASSWORD_FROM_FRONT, this.password);
  return isValid;
};
instructorSchema.methods.genJWT = function () {
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
module.exports = mongoose.model('instructor', instructorSchema);
