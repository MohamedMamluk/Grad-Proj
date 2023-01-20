
![ITI graduation project](https://i.ibb.co/92vhbZL/310861688-861288728332667-2611192479083902775-n.jpg)
# ***E-Learning / LMS***.

## Must have features:
- Courses (free - paid) {}.
- Dashboard analytics that shows individual course stats for Instructors/Students.
  - Instructor CRUD on Courses.
  - Students Access to Enrolled Courses.
  - Students cont. button
- Feedback using email.
- (Login / Register {Email - Google - Facebook}) / Forget Password.
- Tasks
- Assignments to pass the course.
- Certificate upon completion.
- Videos as Youtube Link <sub>(todo: Upload on out database)</sub>
- Easy to Navigate / Responsive

### Bonus Features:
- Game like system where students can gain achivements from interacting with the app *<sub>(maybe a leaderboard)</sub>*.
- Students can chat with Instructors only on the courses they are enrolled in.
- Deathmatch e-learning edition
- Live video sessions
- parental advisory
- Download video
- Points if score on exam > 95%

### Main Routes:
- /home
- /about
- /register
- /login
- /forget-password
- /dashboard *** to be filled ***
  - /dashboard/overview {Analytics}
  - /dashboard/edit-profile
  - /dashboard/logout
    - Instructor:
      - /dashboard/courses
      - /dashboard/courses/new
      - /dashboard/courses/[course-id]
      - /dashboard/courses/[course-id]/analytics
      - /dashboard/courses/[course-id]/update
      - /dashboard/courses/[course-id]/add
      - /dashboard/courses/[course-id]/delete
      - /dashboard/earnings
    - Student:
      - /dashboard/courses
      - /dashboard/courses/[course-id]
      - /dashboard/courses/[course-id]/options
      - /dashboard/courses/[course-id]/analytics
      - /dashboard/courses/[course-id]/[lect-id]
    - Admin:
      - /dashboard/courses
      - /dashboard/courses/[course-id]
      - /dashboard/users
      - /dashboard/earnings
- /search
- /categories
- /categories/[cate-id]
- /courses
- /courses/[course-id]
- /courses/[course-id]/payment
- /courses/[course-id]/[lect-id]

---------------------------
### Stacks:
#### Front-End:
- React -------->NextJs.

- Typescript.

- CSS ---------->TailwindCSS.

- Socket-io ------>Socket-io-client.

#### Back-end:
- Nodejs.

- Express.

- MongoDB ----->Mongoose.

- Typescript.

- Socket-io.

- Stripe.
