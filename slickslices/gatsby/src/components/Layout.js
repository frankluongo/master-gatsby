import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import { GlobalStyles, Typography } from '@styles';
import stripes from '@assets/images/stripes.svg';
import Footer from './Footer';
import Header from './Header';

const ContentStyled = styled.div`
  padding: 2rem;

  background: white;
`;

const SiteBorderStyled = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);

  background: white url(${stripes});
  background-size: 80em;
  border: 5px solid white;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyled>
        <ContentStyled>
          <Header />
          {children}
          <Footer />
        </ContentStyled>
      </SiteBorderStyled>
    </>
  );
}
