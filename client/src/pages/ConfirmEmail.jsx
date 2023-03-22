import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const ConfirmEmail = () => {
  let [t, i18n] = useTranslation();
  const { code } = useParams();
  const navigate = useNavigate();
  console.log(code);
  useEffect(() => {
    const confirm = async () => {
      try {
        const data = await axios.post('/auth/confirm/' + code);
        if (data.data) {
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      } catch (error) {}
    };
    confirm();
  }, []);
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='rounded-xl w-[800px] h-[600px] !border border-l-white border-r-green-500 border-t-red-500 border-b-blue-500'>
        <div className='flex justify-center'>
          <div className='w-52 '>
            <img
              src='/logo-04.png'
              className='w-full h-full object-cover'
              alt=''
            />
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-gray-300'>{t("Email Confirmed")}</h1>
          <p className='text-gray-400'>
            {t("Please wait while we redirect you to the login page...")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
