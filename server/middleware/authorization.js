const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  if (!payload) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'You are not authorized' });
  }

  req.user = payload;
  next();
};

module.exports = authorization;
