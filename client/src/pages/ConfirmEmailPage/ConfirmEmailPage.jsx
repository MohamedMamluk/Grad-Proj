import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ConfirmEmailPage.css';
import { useTranslation } from 'react-i18next';

const ConfirmEmailPage = () => {
  let [t, i18n] = useTranslation();
    const location = useLocation();
  const authSelector = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authSelector != null) {
      const redirect = location.state?.from?.pathname ||
    //    '/dashboard';
      navigate(redirect, { replace: true });

       // navigate('/dashboard');
    }
  }, []);

//     const confirm = async () => {
        
//     };

//   const handleResend=(e)=>{
//     confirm();
//   }
      
    return (
        <div className='body'>

        <div className='con'>
        <div className="brand-logo">
            <img src="./logo-04.png" alt="MindsOn" />
        </div>
            <h2>{t("Verify Your Account")}</h2>
            <p>
                {t("We emailed you a verification email, so please, go check your mail box")} &#9786;
            </p>
            {/* <label>
                Did not receive an email? 
                <br/> 
                <button onClick={handleResend} >Resend?</button>
            </label> */}
        </div>
        </div>
    );
};

export default ConfirmEmailPage;