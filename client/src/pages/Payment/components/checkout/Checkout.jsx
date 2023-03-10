import { PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { Container, TextField } from '@mui/material';
import styles from './checkout.module.css';
import CoursePaymentCard from '../sidebar/Sidebar';
export default function Checkout({ courseData, clientSecret }) {
  const stripe = useStripe();

  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/enrolled?csid=${courseData._id}`,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occured.');
    }

    setIsProcessing(false);
  };
  if (!courseData) {
    return;
  }
  return (
    <div className={styles.checkout_container}>
      <CoursePaymentCard courseData={courseData} clientSecret={clientSecret} />
      <div style={{ width: '100%' }}>
        <h3>Payment Details</h3>
        <p>Complete your purchase by providing your payment details</p>
        <form
          id='payment-form'
          className={styles.payment_form}
          onSubmit={handleSubmit}
        >
          <div className={styles.userInfo}>
            <TextField
              id='outlined-basic'
              label='Cardholder Name'
              variant='outlined'
              sx={{ width: '100%' }}
            />
            <TextField
              id='outlined-basic'
              label='Email Address'
              variant='outlined'
              sx={{ width: '100%' }}
            />
            <TextField
              id='outlined-basic'
              label='Phone Number'
              variant='outlined'
              sx={{ width: '100%' }}
            />
          </div>

          <PaymentElement
            id='payment-element'
            className={styles.payment_element_container}
          />
          <button
            className={styles.checkout__button}
            disabled={isProcessing || !stripe || !elements}
            id='submit'
          >
            <span id='button-text'>
              {isProcessing ? 'Processing ... ' : 'Pay now'}
            </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id='payment-message'>{message}</div>}
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}
