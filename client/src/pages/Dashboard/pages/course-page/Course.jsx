import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import { Container } from '@mui/system';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';
import LessonNav from '../../../../components/lessonNav/lessonNav';
import Loader from '../../../../components/loading/loading';
import './Course.css';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import Avatar from '@mui/material/Avatar';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
// import HoverRating from '../../components/HoverRating.tsx';

const Course = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.auth);
  const [course, setCourse] = useState({});
  const [courseInfo, setCourseInfo] = useState({});
  const [instructor, setInstructor] = useState({});
  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    axios.get('/course/' + id).then((res) => {
      setCourse(res.data);
      axios
        .get('/instructor/' + res.data.instructor)
        .then((instructorResponse) =>
          setInstructor(instructorResponse.data.user)
        );
      axios
        .get('/courseinfo/' + res.data.courseInfo)
        .then((res) => setCourseInfo(res.data));
    });
  }, [id]);

  if (!courseInfo.courseLessons) {
    return (
      <div style={{ position: 'absolute', left: '10%', top: '50%' }}>
        <Loader></Loader>
      </div>
    );
  }
  return (
    <>
      <div class='user-box first-box'>
        <div class='activity card box' style={{ delay: '.2s' }}>
          <div class='title'>
            <AutoStoriesIcon /> {course.name}
          </div>
          <div class='subtitle'>{courseInfo.description}</div>
          <div class='activity-links'>
            <div class='activity-link active'>Course Details</div>
          </div>
          <div class='destination'>
            <div class='destination-card'>
              <div class='destination-points'>
                <div class='point-co'>
                  <AvTimerOutlinedIcon /> Lessons Counter
                </div>
                <div class='sub-point'>
                  {' '}
                  {courseInfo.courseLessons.length} Lessons
                </div>
              </div>
            </div>
            <div class='destination-card'>
              <div class='destination-points'>
                <div class='point'>
                  <SchoolIcon /> Course Level{' '}
                </div>
                <div class='sub-point'>{courseInfo.level}</div>
              </div>
            </div>
            <div class='destination-card'>
              <div class='destination-points'>
                <div class='point'>
                  <LocalAtmOutlinedIcon /> Price{' '}
                </div>
                <div class='sub-point'>{USD.format(course.cost)} </div>
              </div>
            </div>
          </div>
          <button
            className={`button offer-button ${
              userData.userData.courses.find((course) => course == id)
                ? 'bg-gray-500'
                : ''
            }`}
            disabled={
              userData.userData.courses.find((course) => course == id)
                ? true
                : false
            }
            onClick={() => {
              if (course.cost === 'free') {
                console.log('THIS IS FREE');
                axios.get('/enrollment/intent/' + id, {
                  headers: {
                    Authorization: 'Bearer ' + userData.token,
                  },
                });
              } else {
                console.log('THIS COURSE IS PAID');
                navigate('/payment/' + id);
              }
            }}
          >
            {userData.userData.courses.find((course) => course == id)
              ? 'enrolled'
              : 'Enroll Now'}
          </button>
        </div>
        <div className='secCard card box !min-h-auto' style={{ delay: '.4s' }}>
          <div class='title'>
            <LightbulbOutlinedIcon />
            What You Will Learn
          </div>
          <div class='secCard-wrapper flex-col'>
            <div class='secCard-info'>
              {courseInfo.whatYouWillLearn.map((learningOutcome) => {
                return (
                  <>
                    <div class='subtitle'>{learningOutcome.title}</div>

                    <Typography
                      sx={{ maxHeight: 70, maxWidth: 400 }}
                      variant='body2'
                      color='text.secondary'
                    >
                      <div class='subtitle'>{learningOutcome.description}</div>
                    </Typography>
                  </>
                );
              })}
            </div>
            {/* <div class='secCard-chart'>
              <div className='rate'>
                <HoverRating />
              </div>

              <h5>Rating</h5>
            </div> */}
          </div>
          <div class='secCard-profile'>
            <span class='by'>By:</span>
            <Avatar class='secCard-img' src={instructor.image} />
            <div class='secCard-detail'>
              <div class='secCard-name'>
                {instructor.firstName} {instructor.lastName}
              </div>
              {/* <div class='secCard-type'>{instructor.instructorDescription}</div> */}
            </div>
          </div>
        </div>
        <LessonNav
          enrolled={
            userData.userData.courses.find((course) => course == id)
              ? true
              : false
          }
          lessonArr={courseInfo.courseLessons}
          courseId={course._id}
        />

        <div class='account card account-wrapper' style={{ delay: '.8s' }}>
          <CastForEducationOutlinedIcon />
          <div class='forthCard-title'>What People Think of This Course :</div>
          <div class='StuOpinion'>
            {courseInfo.reviews.map((review) => {
              return (
                <>
                  <Typography
                    sx={{ maxHeight: 70, maxWidth: 400 }}
                    variant='h5'
                    color='text.secondary'
                  >
                    <Rating value={review.rating} readOnly />
                  </Typography>
                  <Typography
                    sx={{ maxHeight: 70, maxWidth: 400 }}
                    variant='body2'
                    color='text.secondary'
                  >
                    {review.reviewText}
                  </Typography>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Course;
