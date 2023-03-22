import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';

function LinkRouter(props) {
  return (
    <Link
      {...props}
      component={RouterLink}
      sx={{
        '&:hover': {
          color: 'wheat',
          textDecoration: 'none',
        },
      }}
    />
  );
}

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  // console.log(pathnames);
  const [course, setCourse] = useState('');
  const [lesson, setLesson] = useState('');
  const [paths, setPaths] = useState([]);
  
  useEffect(() => {
    setPaths(...pathnames)
    const getCourse = async(courseID)=>{
      const data = await axios.get('/course/' +courseID )
      setCourse(data.data.name);
      return data.data.name;
      ;}
      const getLesson = async (lessonID)=>{
        const lesData = await axios.get('/lesson/' + lessonID)
        setLesson(lesData.data.title);
        return lesData.data.title;
    }
    if(pathnames.length == 3){
      const cour = getCourse(pathnames[2]);
      setPaths(...pathnames.slice(0,1 ), cour , ...pathnames.slice(3));
    }
    if(pathnames.length == 4){
      const cour = getCourse(pathnames[2]);
      getCourse(pathnames[3]);
      setPaths(...pathnames.slice(0,2 ), cour);
    }
    if(pathnames.length == 5){
      const cour = getCourse(pathnames[2]);
      const less = getCourse(pathnames[2]);
      getCourse(pathnames[2]);
      getLesson(pathnames[4]);
      setPaths(...pathnames.slice(0,1 ), cour, pathnames[3],less);
    }
  }, [pathnames[2],pathnames[4]]);
  // setPathnames(pathnames.pop());
  // console.log(course, lesson);
  // console.log("path nameeee: ", paths);
  if(pathnames.length == 3){
    
  }
  if(pathnames.length == 4){
    pathnames[3] = course;
  }
  if(pathnames.length == 5){
    pathnames[2] = course;
    pathnames[4] = lesson;
  }

  return (
    <Breadcrumbs
      aria-label='breadcrumb'
      color='inherit'
      noWrap
      sx={{ flexGrow: 1, textTransform: 'capitalize' }}
    >
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color='wheat' fontWeight='bold' key={to}>
            {value}
          </Typography>
        ) : (
          <LinkRouter underline='hover' color='inherit' to={to} key={to}>
            {value}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
