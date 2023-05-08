import React from 'react';
import Layout from '../components/Layout';
import CheckoutWizard from '../components/CheckoutWizard';

export default function ShippingScreen() {
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form
      className='mx-auto max-w-screen'></form>
    </Layout>
  );
}
