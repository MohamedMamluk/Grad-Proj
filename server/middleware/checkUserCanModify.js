const { StatusCodes } = require('http-status-codes');

const checkUserCanModify = (mainModel, ...userModels) => {
  return async (req, res, next) => {
    // Get the user data from the request body
    const { id } = req.user;

    // Loop through the models and check if the user exists
    let userExists;
    for (const Model of userModels) {
      const user = await Model.findOne({ _id: id });
      //If user is found just exit from the loop
      if (user) {
        userExists = user;
        break;
      }
    }

    // If the user isn't an admin or an instructor throw an error
    if (!userExists) {
      //console.log('User');
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: 'User is not authorized',
      });
    }
    if (userExists.role != 'admin') {
      const data = await mainModel.findById(req.params.id);
      if (data.instructorId != id)
        return res.status(StatusCodes.UNAUTHORIZED).json({
          message: 'User is not authorized',
        });
    }

    // Otherwise, call the next middleware
    return next();
  };
};

module.exports = checkUserCanModify;
