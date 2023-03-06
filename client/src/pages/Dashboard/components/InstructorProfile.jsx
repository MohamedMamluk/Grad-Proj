import React from "react";
import "../../../components/AllCourses/allCourses.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Pagination from "@mui/material/Pagination";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const InstructorProfile = ({ userData }) => {
  const breadcrumbs = [
    <NavLink underline="hover" color="inherit" to={"/dashboard"}>
      My Dashboard
    </NavLink>,
    <Typography key="3" color="text.primary">
      Profile
    </Typography>,
  ];
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <div>
      {showSkeleton && <Skeleton variant="circular" width={40} height={40} />}
      {showSkeleton && <Skeleton />}
      {showSkeleton && <Skeleton />}
      {showSkeleton && <Skeleton /> && (
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      )}
      {showSkeleton && <Skeleton variant="rounded" width={210} height={60} />}
      <div>
        {isVisible && (
          <div>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>

            <Alert
              iconMapping={{
                success: <CheckCircleOutlineIcon fontSize="inherit" />,
              }}
            >
              Your profile is verified as a instructor profile !
            </Alert>

            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                ></Typography>

                <Box
                  sx={{
                    mx: "auto",
                    width: 250,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ mx: "auto", width: 150 }}>
                    <Stack direction="row" spacing={1} align="center">
                      <Avatar
                        src="/broken-image.jpg"
                        sx={{ width: 80, height: 80, mx: "auto" }}
                      />
                    </Stack>
                  </Box>
                  <Typography
                    variant="h5"
                    component="div"
                    align="center"
                    sx={{ mb: 1.5, mt: 1.5 }}
                  >
                    {userData.firstName} {userData.lastName}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, mt: 1 }}
                    color="text.secondary"
                    align="center"
                  >
                    <Chip label={userData.role} />
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    align="center"
                  >
                    <Chip
                      label={userData.email}
                      variant="outlined"
                      align="center"
                    />
                  </Typography>
                  <Typography variant="body2" align="center">
                    {"We hope you enjoy teaching your courses"}
                  </Typography>
                  <Stack
                    direction="row"
                    sx={{ mt: 1.5, mx: 7.2, width: 150 }}
                    align="center"
                  >
                    <Chip
                      label="Courses Taught :"
                      color="primary"
                      variant="outlined"
                      align="center"
                    />
                  </Stack>
                </Box>
              </CardContent>
            </Card>

            <ul>
              <div id="coursesContainer" className="container">
                {userData.courses.map((course) => (
                  <div key={course._id} className="card p-3 m-2 ">
                    <div id="card-image__container">
                      <img src={course.image} id="card-image" alt="..." />
                    </div>
                    <div className="card-body">
                      <p className="card-text" title={course.name}>
                        {course.name.length > 50
                          ? course.name.substring(0, 45) + "..."
                          : course.name}
                      </p>
                      <p className="card-text">{course.cost}</p>
                      <p className="card-text">{course.duration}</p>
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
        )}
      </div>
    </div>
  );
};

export default InstructorProfile;
