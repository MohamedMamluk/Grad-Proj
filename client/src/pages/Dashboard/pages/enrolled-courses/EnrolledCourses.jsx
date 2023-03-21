import React from "react";
import "../../../../components/AllCourses/allCourses.css";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import "./EnrolledCourses.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.auth.userData,
  };
};
const EnrolledCourses = ({ data }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      await axios.all(
        data.courses.map(async (course) => {
          const courseData = await axios.get(`/course/${course}`);
          setCourses((prev) => [...prev, courseData.data]);
        })
      );
    };
    getCourses();
  }, []);
  return (
    <div>
      <h3>Enrolled Courses</h3>
      <ul>
        <div id="coursesContainer" className="container">
          {courses?.map((course) => (
            <div key={course?._id} className="card p-3 m-2 ">
              <div id="card-image__container">
                <img src={course?.image} id="card-image" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text" title={course?.name}>
                  {course.name?.length > 50
                    ? course?.name.substring(0, 45) + "..."
                    : course?.name}
                </p>
                <p className="card-text">{course?.cost}</p>
                <p className="card-text">{course?.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </ul>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Stack spacing={1}>
          <Pagination count={5} disabled />
        </Stack>
      </Box>
    </div>
  );
};

export default connect(mapStateToProps)(EnrolledCourses);
