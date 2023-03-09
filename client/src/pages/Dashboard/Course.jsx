import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleCourse= async ()=>{
  const {id} = useParams();
  const [course, setCourse] = useState({});
  const [courseInfo,setCourseInfo] = useState({})
  useEffect( () =>{ 
    axios
      .get(`/course/${id}`)
      .then((res) => setCourse(res.data));
  }, []);
  useEffect(() => {
    axios
      .get(`/courseinfo/${course.courseInfo}`)
      .then((res) => setCourseInfo(res.data));
  }, []);
  if (course.length === 0) {
    return <p>loading</p>;
  }
  console.log(course)
  // console.log(courseInfo)
  return (<>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {courseInfo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Enroll</Button>
      </CardActions>
    </Card>

        </>
  );
}
export default SingleCourse;
