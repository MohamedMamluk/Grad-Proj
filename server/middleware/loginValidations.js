const { StatusCodes } = require('http-status-codes');

const loginValidation = (...models) => {
  return async (req, res, next) => {
    // Get the user data from the request body
    const { email } = req.body;

    // Loop through the models and check if the user exists
    let userExists = false;
    for (const Model of models) {
      const user = await Model.findOne({ email });
      //If user is found add role property to the req.body
      if (user) {
        userExists = true;
        req.body.role = user.role;
        break;
      }
    }

    // If a user doesn't exist, return an error
    if (!userExists) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Please register first',
      });
    }

    // Otherwise, call the next middleware
    return next();
  };
};

module.exports = loginValidation;
