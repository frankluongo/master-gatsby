/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from '@components/Layout';
import { OrderProvider, SlicesProvider } from '@context';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return (
    <OrderProvider>
      <SlicesProvider>{element}</SlicesProvider>
    </OrderProvider>
  );
}
