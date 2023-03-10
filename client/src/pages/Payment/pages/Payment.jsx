import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/checkout/Checkout';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Container, LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../../components/header/header';
function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [course, setCourse] = useState({});
  const user = useSelector((state) => state.auth);
  const { id } = useParams();
  useEffect(() => {
    setStripePromise(
      loadStripe(
        'pk_test_51MhaTbEP7ZlDrHJgR2PCZtAZAd2MjHev8Mh84i0ljbVo5XRFFTKPhSDxbMyRI5iuIE3sGwm4ioOIL3bIfdxCsrYY00uL698KTc'
      )
    );

    const getCourse = async () => {
      const courseData = await axios.get('/course/' + id);
      setCourse(courseData.data);
    };

    getCourse();
  }, [id]);

  useEffect(() => {
    axios
      .get('/enrollment/intent/' + id, {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      })
      .then((result) => {
        console.log(result.data);
        var { clientSecret } = result.data;
        setTimeout(() => setClientSecret(clientSecret), 1000);
      });
  }, [id, user.token]);
  if (!stripePromise || !clientSecret) {
    return <LinearProgress color='secondary' />;
  }
  return (
    <div>
      {/* <LinearProgress color='secondary' /> */}
      {/* <Header /> */}
      <Container>
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm courseData={course} paymentNumber={clientSecret} />
          </Elements>
        )}
      </Container>
    </div>
  );
}

export default Payment;
