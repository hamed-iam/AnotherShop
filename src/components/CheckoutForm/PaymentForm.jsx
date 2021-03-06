import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import {
  Elements,
  CardElement,
  ElementConsumer,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

const stripePromise = loadStripe('...');

const PaymentForm = ({ checkoutToken }) => {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>
        Payment Method
      </Typography>

      <Elements stripe={stripePromise}>
        <ElementConsumer>
          {(elements, stripe) => (
            <form>
              <CardElement />
              <br />
              <br />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button></Button>
                <Button></Button>
              </div>
            </form>
          )}
        </ElementConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
