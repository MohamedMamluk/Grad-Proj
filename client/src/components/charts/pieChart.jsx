import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { padding } from '@mui/system';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  let [t, i18n] = useTranslation();
  const [instructors, setInstructors] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`/instructor`).then((res) => {
      setInstructors(res.data.length);
      // console.log('useEffect for instrucrors data ' + res.data.length);
    });
  }, []);
  useEffect(() => {
    axios.get(`/student`).then((res) => {
      setStudents(res.data.length);
      // console.log('useEffect for students data ' + res.data.length);
    });
  }, []);

  const data = {
    labels: [t('Instructors'), t('Students')],
    datasets: [
      {
        data: [instructors, students],
        backgroundColor: ['#6D54DE', '#a494ea'],
      },
    ],
  };
  const options = {};

  return (
    <div className='w-1/2'>
      {/* <h1>Pie Chart</h1> */}
      <div
        style={{
          padding: '20px',
          width: '50%',
        }}
      >
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
};

export default PieChart;
