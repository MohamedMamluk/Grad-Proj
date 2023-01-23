const mongoose = require('mongoose');

const connect = async (URI) => {
  return mongoose.connect(URI);
};

module.exports = connect;
