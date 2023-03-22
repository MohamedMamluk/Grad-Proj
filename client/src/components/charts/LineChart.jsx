import React, { useEffect, useMemo, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  let [t, i18n] = useTranslation();
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('Loading...');
  const user = useSelector((store) => store.auth);
  useEffect(() => {
    const getBalanceData = async () => {
      const data = await axios.all(
        user.userData.balance.map(async (course) => {
          return await (
            await axios.get('/course/' + course.courseId)
          ).data;
        })
      );
      setCourses(data);
    };
    getBalanceData();
  }, []);
  const totalBalance = useMemo(() =>
    user.userData.balance.reduce((prev, current) => {
      return (prev += current.cost);
    }, 0)
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  const labels = [
    new Date(
      new Date(user.userData.balance[0].createdAt) - 8.64e7
    ).toLocaleDateString(),
    ...user.userData.balance.map((item) =>
      new Date(item.createdAt).toLocaleDateString()
    ),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: t("Balance"),
        data: [0, ...user.userData.balance.map((item) => item.cost)],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
}
