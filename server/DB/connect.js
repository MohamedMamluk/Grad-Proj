const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = async (URI) => {
  return mongoose.connect(URI);
};

module.exports = connect;
