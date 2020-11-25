import React from 'react';
import { GlobalStyles, Typography } from '@styles';
import Footer from './Footer';
import Header from './Header';
import 'normalize.css';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header />
      {children}
      <Footer />
    </>
  );
}
