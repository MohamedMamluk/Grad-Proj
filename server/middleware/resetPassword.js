const { StatusCodes } = require('http-status-codes');

const resetPasswordExist = (...models) => {
  return async (req, res, next) => {
    // Get the user data from the request body
    const { email } = req.body;

    // Loop through the models and check if the user exists
    let userExists = false;
    for (const Model of models) {
      const user = await Model.findOne({ email });
      //If user is found just exit from the loop
      if (user) {
        userExists = true;
        req.user = user;
        break;
      }
    }

    // If a user exists, return an error
    if (!userExists) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "User doesn't exist",
      });
    }

    // Otherwise, call the next middleware
    return next();
  };
};

module.exports = resetPasswordExist;
