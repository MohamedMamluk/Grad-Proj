require("dotenv").config();
const express = require("express");
const app = express();
const courseRoutes = require("./components/course/course.route");
const connect = require('./DB/connect');
const authRoutes = require('./components/auth/auth.route');
const lessonRoutes = require('./components/lesson/lesson.routes');
const courseInfoRoute = require('./components/courseInfo/courseInfo.route');
const StudentRoutes = require('./components/student/StudentsRoutes');
const instructorRoutes = require('./components/instructor/instructor.route');
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to our project</h1>");
});
//auth route
app.use("/api/auth", authRoutes);

//lesson route
app.use('/api/lesson', lessonRoutes);

//courseInfo  route
app.use("/api/courseinfo", courseInfoRoute);
app.use("/api/student", StudentRoutes);
app.use("/api/instructor", instructorRoutes);
app.use("/api/course", courseRoutes);

const connection = async () => {
  try {
    await connect(process.env.MONGOURI_DEV);
    app.listen(7000, () => {
      console.log("server is running on port http://localhost:" + 7000);
    });
  } catch (error) {
    console.log(error);
  }
};

connection();
