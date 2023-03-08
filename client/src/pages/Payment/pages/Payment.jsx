import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/checkout/Checkout';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
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
        // //console.log(result.data);
        var { clientSecret } = result.data;
        setClientSecret(clientSecret);
      });
  }, [id, user.token]);

  return (
    <Container>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm courseData={course} paymentNumber={clientSecret} />
        </Elements>
      )}
    </Container>
  );
}

export default Payment;
