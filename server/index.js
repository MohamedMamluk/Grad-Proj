require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const studentRoutes = require('./routes/student.route');
const connect = require('./DB/connect');
mongoose.set('strictQuery', true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('<h1>Welcome to our project</h1>');
});

app.use('/api/v1/students', studentRoutes);

const connection = async () => {
  try {
    await connect(process.env.MONGOURI);
    app.listen(7000, () => {
      console.log('server is running on port http://localhost:' + 7000);
    });
  } catch (error) {
    console.log(error);
  }
};

connection();
