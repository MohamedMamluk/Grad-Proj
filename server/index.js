require('dotenv').config();
const express = require('express');
const app = express();
const courseRoutes = require('./components/course/course.route');
const connect = require('./DB/connect');
const authRoutes = require('./components/auth/auth.route');
const lessonRoutes = require('./components/lesson/lesson.routes');
const courseInfoRoute = require('./components/courseInfo/courseInfo.route');
const StudentRoutes = require('./components/student/StudentsRoutes');
const lessonsFinishedRoutes = require('./components/lessonsFinished/lessonFinished.routes');
const instructorRoutes = require('./components/instructor/instructor.route');
const enrollmentRoutes = require('./components/enrollment/enrollment.routes');
const uploadRoutes = require('./components/upload/upload.route');
const AdminModel = require('./components/admin/admin.model');
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to our project</h1>');
});

//auth route
app.use('/api/auth', authRoutes);
app.use('/api/enrollment', enrollmentRoutes);
app.get('/api/admin/:id', async (req, res) => {
  try {
    const user = await AdminModel.findById(req.params.id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

//lesson route
app.use('/api/lesson', lessonRoutes);
app.use('/api/upload', uploadRoutes);

//courseInfo  route
app.use('/api/courseinfo', courseInfoRoute);
app.use('/api/student', StudentRoutes);
app.use('/api/student/:id/lessonsFinished', lessonsFinishedRoutes);
app.use('/api/instructor', instructorRoutes);
app.use('/api/course', courseRoutes);

const connection = async () => {
  try {
    //console.log(process.env.MONGOURI_DEV);
    await connect(process.env.MONGOURI_DEV);
    app.listen(7000, () => {
      //console.log('server is running on port http://localhost:' + 7000);
    });
  } catch (error) {
    //console.log(error);
  }
};

connection();
