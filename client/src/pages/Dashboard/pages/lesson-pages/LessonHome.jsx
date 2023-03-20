import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AllLessons from '../../../../components/allLessons/allLessons';
import Loader from '../../../../components/loading/loading';

const LessonHome = () => {
    const courseID = useParams();
    // console.log(courseID.id); //CourseId
    const [course, setCourse] = useState({});
    const [courseInfo, setCourseInfo] = useState();
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        axios.get('/course/' + courseID.id).then((res) => {
            setCourse(res.data);
            axios.get('/courseinfo/' + res.data.courseInfo).then((res) =>{
                setLessons(res.data.courseLessons);
                setCourseInfo(res.data.description);
            })
        });
    }, []);
      if(lessons.length == 0){
        return(<div style={{position: 'absolute', left: '10%', top: '50%'}}>
    <Loader/>
    </div>)
      };
    return (
        <>
            <Card sx={{ maxWidth: 1000 , textAlign: "center" }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Welcome to {course.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {courseInfo}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <br/>
            <Card sx={{ maxWidth: 1000 , textAlign: "center" }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lessons In Course
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <br />
            <AllLessons lessonsArr={lessons}/>
        </>
    );
};

export default LessonHome;