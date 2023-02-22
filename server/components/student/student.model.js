const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "please provide your first name"],
        minLength: 3,
        maxLength: 20
    },
    lastName: {
        type: String,
        required: [true, "please provide your last name"],
        minLength: 3,
        maxLength: 20
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
        default: 'student',
    },
    phone: {
        type: String,
        required: [true, 'Please provide a working number from your country']
    },
    interests: {
        type: [String], 
        default: [],
    },
    favorites: {   
        type: [mongoose.Schema.Types.ObjectId], 
        default: []
    },
    courses: {
        type: [mongoose.Schema.Types.ObjectId], 
        default: []
    }
}, { timestamps: true })

studentSchema.pre('save', async function () {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(this.password, salt);
        this.password = hashed;
    } catch (error) {
        console.log(error);
    }
});
studentSchema.methods.comparePassword = async function (
    USER_PASSWORD_FROM_FRONT
) {
    const isValid = bcrypt.compareSync(USER_PASSWORD_FROM_FRONT, this.password);
    return isValid;
};
studentSchema.methods.genJWT = function () {
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
module.exports = mongoose.model('student', studentSchema);


