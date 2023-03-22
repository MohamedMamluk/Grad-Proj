import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ListItemButton, ListItemText } from '@mui/material';
import { Link , useLocation} from 'react-router-dom';
import Loader from "../loading/loading";

const AllLessons = (lessonIdArr) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const lessonIds = lessonIdArr.lessonsArr;
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        const getLesson = async (lesson) => {
            const lessonData = await axios.all(
                lessonIds.map(async (lesson) => {
                    const l = await axios.get("/lesson/" + lesson.lessonId);
                    return l.data;
                })
            );
            setLessons(lessonData);
        };
        getLesson(lessonIds);
    }, [lessonIdArr]);
    if (lessons.length == 0) {
        return (<div style={{position: 'absolute', left: '10%', top: '70%',}}>
        <Loader/>
        </div>);
    }
    return (
        <div
            style={{ display: "flex", flexWrap: "wrap" }}
            id="coursesContainer"
            className="container"
        >
            {lessons.map((lesson) => {
                return (
                    <Card key={lesson._id} sx={{ width: "100%", margin: 5 }}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                {lesson.type}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {lesson.title}
                            </Typography>
                            <Typography variant="body2">
                                <br />
                                {lesson.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/dashboard/courses/${pathnames[2]}/lesson/${lesson._id}`} variant="body2">
                                <ListItemButton style={{ width: "max-content" }}>
                                    <ListItemText primary="Start Lesson" />
                                </ListItemButton>
                            </Link>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    );
};

export default AllLessons;
