import React from "react";
import { useEffect, useState } from "react";
import { ListItemButton, ListItemText } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const LessonNav = (courseId,lessonIds) => {
    const courseID = courseId.courseId;
    const lessonId = courseId.lessonArr;
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        const getLesson = async (lesson) => {
            const lessonData = await lessonId.forEach((id) => { 
                const _id = id._id;
                    axios.get("/lesson/" + _id).then((res) => {
                        setLessons((previous) => [...previous, res.data]);
                    });
            });
        };
        getLesson(lessonId);
    }, []);
    console.log(lessons);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
                <TableBody>
                    {lessons.map((lesson) => (
                        <Link to={`/dashboard/courses/${courseID}/lesson/${lesson._id}`}>
                        <TableRow
                            key={lesson.title}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {lesson.title}
                            </TableCell>
                            <TableCell align="right">{lesson.type}</TableCell>
                            <TableCell align="right">
                                <AddIcon />
                            </TableCell>
                        </TableRow>
                        </Link>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LessonNav;