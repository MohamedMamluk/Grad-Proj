// import * as React from "react";
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

const Course = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.auth);
  const [course, setCourse] = useState({});
  const [courseInfo, setCourseInfo] = useState({});
  useEffect(() => {
    axios.get('/course/' + id).then((res) => {
      setCourse(res.data);
      axios
        .get('/courseinfo/' + res.data.courseInfo)
        .then((res) => setCourseInfo(res.data));
    });
  }, [id]);

  if (!courseInfo.courseLessons) {
    return <p>Loading</p>;
  }
  return (
    <>
      <Card sx={{ maxWidth: 1000, maxHeight: 1000 }}>
        <CardMedia
          sx={{ maxHeight: 500 }}
          image={course.image}
          title={course.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='div'>
            {course.name}
          </Typography>
          <br />
          <Typography
            sx={{ maxHeight: 70, maxWidth: 400 }}
            variant='body2'
            color='text.secondary'
          >
            {courseInfo.description}
          </Typography>
          <br />
          <Typography
            sx={{ maxHeight: 70, maxWidth: 400 }}
            variant='body2'
            color='text.secondary'
          >
            <AutoStoriesIcon /> {courseInfo.courseLessons.length} Lessons
          </Typography>
          <br />
          <Typography
            sx={{ maxHeight: 70, maxWidth: 400 }}
            variant='body2'
            color='text.secondary'
          >
            <SchoolIcon /> {courseInfo.level}
          </Typography>
          <br />
          {!userData.userData.courses.includes(id) && (
            <Typography
              sx={{ maxHeight: 70, maxWidth: 400 }}
              variant='body2'
              color='text.secondary'
            >
              Price: $ {course.cost}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          {!userData.userData.courses.includes(id) && (
            <Button
              size='small'
              color='primary'
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
              Enroll
            </Button>
          )}
        </CardActions>
      </Card>
      <br />
      <Card sx={{ maxWidth: 1000, maxHeight: 1000 }}>
        <CardContent>
          <Typography gutterBottom variant='h4' component='div'>
            What You Will Learn
          </Typography>
          <br />
          <Container
            sx={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center' }}
          >
            {courseInfo.whatYouWillLearn.map((learningOutcome) => {
              return (
                <Card sx={{ maxWidth: 400, maxHeight: 400, margin: 2 }}>
                  <Typography
                    sx={{ maxHeight: 70, maxWidth: 400 }}
                    variant='h5'
                    color='text.secondary'
                  >
                    {learningOutcome.title}
                  </Typography>
                  <Typography
                    sx={{ maxHeight: 70, maxWidth: 400 }}
                    variant='body2'
                    color='text.secondary'
                  >
                    {learningOutcome.description}
                  </Typography>
                </Card>
              );
            })}
          </Container>
        </CardContent>
      </Card>
      <br />
      <Card>
        <Typography gutterBottom variant='h4' component='div'>
          What People Think of This Course
        </Typography>
        <Container
          sx={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center' }}
        >
          {courseInfo.reviews.map((review) => {
            return (
              <Card sx={{ maxWidth: 500, maxHeight: 500, margin: 2 }}>
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
              </Card>
            );
          })}
        </Container>
      </Card>
      <br/>
      <LessonNav lessonArr={courseInfo.courseLessons} courseId={course._id}/>
    </>
  );
};
export default Course;
