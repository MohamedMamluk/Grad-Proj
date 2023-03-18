const { StatusCodes } = require('http-status-codes');
const { registerService, loginService } = require('./auth.service');
const { sendConfirmationEmail } = require('../../utils/nodemailer');
const register = async (req, res) => {
  //console.log(req.body);
  const userData = req.body;
  try {
    const user = await registerService(userData);
    console.log(user);
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await loginService(req.body);
    console.log(user);
    if (!user.email) {
      console.log('here email');
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'WRONG EMAIL OR PASSWORD' });
    }
    const isValid = user.comparePassword(req.body.password);
    console.log(isValid);
    if (!isValid) {
      console.log('here');

      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'WRONG EMAIL OR PASSWORD' });
    }
    console.log(user.confirmationCode);
    if (user.confirmationCode) {
      if (user.status != 'Active'){
        await sendConfirmationEmail(user.firstName,user.email,user.confirmationCode)
        return res.status(401).send({
          message: 'Pending Account. Please Verify Your Email!',
        });
      }
    }

    const token = user.genJWT();
    //To be configured
    // res.cookie('accessToken', token, {
    //   maxAge: 3.154e10, // 1 year,
    //   httpOnly: true, //can only be accessed with http requests and not js
    // });
    res.status(StatusCodes.OK).json({ token, id: user._id, role: user.role });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

module.exports = {
  register,
  login,
};
