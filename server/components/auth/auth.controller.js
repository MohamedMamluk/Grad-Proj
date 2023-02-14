const { StatusCodes } = require('http-status-codes');
const { registerService, loginService } = require('./auth.service');
const register = async (req, res) => {
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
    console.log(user.password, req.body.password);
    const isValid = await user.comparePassword(req.body.password);
    console.log(isValid);
    if (!isValid) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'WRONG EMAIL OR PASSWORD' });
    }
    res.status(StatusCodes.OK).json(user);
  } catch (error) {}
};

module.exports = {
  register,
  login,
};
