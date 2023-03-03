const { StatusCodes } = require('http-status-codes');
const { registerService, loginService } = require('./auth.service');

const register = async (req, res) => {
  console.log(req.body);
  const userData = req.body;
  try {
    const user = await registerService(userData);
    res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await loginService(req.body);
    if (!user.email) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'WRONG EMAIL OR PASSWORD' });
    }
    const isValid = await user.comparePassword(req.body.password);
    if (!isValid) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'WRONG EMAIL OR PASSWORD' });
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
