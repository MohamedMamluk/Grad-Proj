import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/checkout/Checkout';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Container } from '@mui/material';
function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [course, setCourse] = useState({});

  useEffect(() => {
    setStripePromise(
      loadStripe(
        'pk_test_51MhaTbEP7ZlDrHJgR2PCZtAZAd2MjHev8Mh84i0ljbVo5XRFFTKPhSDxbMyRI5iuIE3sGwm4ioOIL3bIfdxCsrYY00uL698KTc'
      )
    );

    const getCourse = async () => {
      const courseData = await axios.get('/course/64015f9840852f37b25ce2ee');
      setCourse(courseData.data);
    };

    getCourse();
  }, []);

  useEffect(() => {
    axios
      .get('/enrollment/intent/64015f9840852f37b25ce2ee', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmI2NjA3NjY2ODZiZGE0OTBlYTRjYSIsImlhdCI6MTY3ODA4Nzc5NiwiZXhwIjoxNjc4MTc0MTk2fQ.vHQDtH2XY0srCOAi7ZFeotu1XWojO0S0ubarV9yeErk',
        },
      })
      .then((result) => {
        // //console.log(result.data);
        var { clientSecret } = result.data;
        setClientSecret(clientSecret);
      });
  }, []);

  return (
    <Container>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm courseData={course} />
        </Elements>
      )}
    </Container>
  );
}

export default Payment;
