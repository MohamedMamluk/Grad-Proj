import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import BalanceTable from './BalanceTable';
const Balance = () => {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('Loading...');
  const user = useSelector((store) => store.auth);
  useEffect(() => {
    const getBalanceData = async () => {
      console.log(user.userData.balance);
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
  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  if (!courses.length > 0) {
    return <h1>{message}</h1>;
  }
  return (
    <div className=''>
      <div id='balance_wrapper' className='flex justify-end mb-2'>
        <span className='!border border-green-500  px-3 py-2 font-bold text-sm md:text-base rounded-full text-gray-600 bg-green-200'>
          Total Balance : {USD.format(totalBalance)}
        </span>
      </div>
      {/* <div id='history_data' className='overflow-x-scroll'>
        {courses.map((item, index) => (
          <div className='historyRow !border border-blue-500 w-auto'>
            <span>{user.userData.balance[index].cost}</span>
            <span className='whitespace-nowrap'>{item.name}</span>
          </div>
        ))}
      </div> */}

      {/* <BalanceTable balance={user.userData.balance} courseData={courses} /> */}
    </div>
  );
};

export default Balance;
