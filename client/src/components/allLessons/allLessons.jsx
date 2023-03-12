import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AllLessons = (lessonIdArr) => {
    const lessonIds = lessonIdArr.lessonsArr;
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        const getLesson = async (lesson) => {
            // const lessonData = await lessonIds.forEach((id) => {
            //     const _id = id._id;
            //     console.log(_id);
            //     axios.get('/lesson/' + _id).then((res) => {
            //         console.log(res.data);
            //         setLessons( res.data);
            //     });
            // });
            const lessonData = await axios.all(
                lessonIds.map(async (lesson)=>{
                    const l = await axios.get('/lesson/' + lesson._id);
                    return l.data
                })
                )
            setLessons(lessonData)
        };
        getLesson();
    }, [lessonIdArr]);
if (lessons.length == 0){
    return (<h1>Loading</h1>)
}
    return (
        <div style={{ display: 'flex', flexWrap:'wrap'}} id='coursesContainer' className='container'>
            {lessons.map((lesson) => {return(
                <Card key={lesson._id} sx={{ width:"100%", margin:5}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {lesson.type}
                        </Typography>
                        <Typography variant="h5" component="div">
                        {lesson.title}
                        </Typography>
                        <Typography variant="body2" sx={{padding:2}}>
                            <br />
                            {lesson.description}
                        </Typography> 
                    </CardContent>
                    <CardActions>
                        <Button size="small">Start Lesson</Button>
                    </CardActions>
                </Card>
            )})}
        </div>
    );
};

export default AllLessons;
