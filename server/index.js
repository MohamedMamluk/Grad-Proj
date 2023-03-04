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
const AdminModel = require('./components/admin/admin.model');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to our project</h1>');
});
// app.get('/config', (req, res) => {
//   res.send({
//     publishableKey: process.env.STRIPE_PUBLIC_KEY,
//   });
// });
// app.post('/create-payment-intent', async (req, res) => {
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       currency: 'EUR',
//       amount: req.body.price,
//       automatic_payment_methods: { enabled: true },
//     });

//     // Send publishable key and PaymentIntent details to client
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (e) {
//     return res.status(400).send({
//       error: {
//         message: e.message,
//       },
//     });
//   }
// });

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

//courseInfo  route
app.use('/api/courseinfo', courseInfoRoute);
app.use('/api/student', StudentRoutes);
app.use('/api/student/:id/lessonsFinished', lessonsFinishedRoutes);
app.use('/api/instructor', instructorRoutes);
app.use('/api/course', courseRoutes);

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
