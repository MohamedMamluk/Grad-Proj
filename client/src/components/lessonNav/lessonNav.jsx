import React from 'react';
import { useEffect, useState } from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../../src/pages/Dashboard/pages/course-page/Course.css';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { useSelector } from 'react-redux';

const LessonNav = ({ enrolled, courseId, lessonArr }) => {
  const courseID = courseId;
  const user = useSelector((store) => store.auth);
  const lessonId = lessonArr;
  console.log(courseID, lessonId);
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    const getLesson = async (lesson) => {
      const lessonData = await lessonArr.forEach((id) => {
        const _id = id.lessonId;
        console.log(_id);
        axios.get('/lesson/' + _id).then((res) => {
          setLessons((previous) => [...previous, res.data]);
        });
      });
    };
    getLesson(lessonId);
  }, []);

  return (
    <>
      <div class='cards-wrapper box' style={{ delay: '.6s' }}>
        <div class='cards-header'>
          <div class='lessons-header'>
            <div class='title'>Course Content</div>
          </div>
        </div>
        <div class='cards card'>
          <div class='cards-head-lesson'>
            <div class='cards-info'>
              <div class='lessons-header'>
                <span>Lessons</span>
                <ControlPointOutlinedIcon />
              </div>
            </div>
          </div>
          {enrolled ? (
            <div class='items lessons'>
              {lessons?.map((lesson) => (
                <div class='item'>
                  -
                  <Link
                    key={lesson?._id}
                    to={`/dashboard/courses/${courseID}/lesson/${lesson?._id}`}
                  >
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {lesson?.title}
                      </TableCell>
                      <TableCell align='right'>{lesson?.type}</TableCell>
                    </TableRow>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            'Please enroll to view lessons'
          )}
        </div>
      </div>
    </>
  );
};

export default LessonNav;
