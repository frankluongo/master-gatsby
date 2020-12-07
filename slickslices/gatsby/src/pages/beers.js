import React from 'react';
import { useBeers } from '@lib';
import BeerList from '@components/BeerList';
import SEO from '@components/SEO';

export default function BeersPage() {
  const { count } = useBeers();
  return (
    <>
      <SEO title="Beers List" />
      <h2 className="center">We have {count} Beers Available. Dine In Only!</h2>
      <BeerList />
    </>
  );
}
