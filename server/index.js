require('dotenv').config();
const express = require('express');
const app = express();
const connect = require('./DB/connect');
const authRoutes = require('./components/auth/auth.route');
const lessonRoutes = require('./components/lesson/lesson.routes');
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to our project</h1>');
});
app.use('/api/auth', authRoutes);
app.use('/api/lesson', lessonRoutes);

const connection = async () => {
  try {
    await connect(process.env.MONGOURI_DEV);
    app.listen(7000, () => {
      console.log('server is running on port http://localhost:' + 7000);
    });
  } catch (error) {
    console.log(error);
  }
};

connection();
