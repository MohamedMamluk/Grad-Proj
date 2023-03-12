import React,{ useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios';


const Lesson = () => {
    const lessonid  = useParams();
    console.log(lessonid)  //lessonID only
    // const navigate = useNavigate();
    // const userData = useSelector((store) => store.auth);
    // const [course, setCourse] = useState({});
    // const [courseInfo, setCourseInfo] = useState({});
    // useEffect(() => {
    //     axios.get("/course/" + id).then((res) => {
    //         setCourse(res.data);
    //         axios
    //             .get("/courseinfo/" + res.data.courseInfo)
    //             .then((res) => setCourseInfo(res.data));
    //     });
    // }, [id]);
    return (
        <>
          <h1>efta7 ana el lesson</h1>
        </>
    );
};

export default Lesson;
