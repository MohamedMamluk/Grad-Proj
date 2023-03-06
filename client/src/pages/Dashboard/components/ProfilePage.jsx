import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InstructorProfile from './InstructorProfile';
import StudentProfile from './StudentProfile';
import { useSelector } from 'react-redux';

const Profile = ({ userType, userId }) => {
  const user = useSelector((state) => {
    return state.auth.userData;
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user.role === 'instructor' ? (
        <InstructorProfile userData={user} />
      ) : (
        <StudentProfile userData={user} />
      )}
    </div>
  );
};
export default Profile;
