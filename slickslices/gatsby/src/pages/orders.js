import React from 'react';
import SEO from '@components/SEO';
import OrderForm from '@components/OrderForm';

export default function OrdersPage() {
  return (
    <>
      <SEO title="Orders" />
      <OrderForm />
    </>
  );
}
