import React from 'react';
import { useBeers } from '@lib';
import BeerList from '@components/BeerList';

export default function BeersPage() {
  const { count } = useBeers();
  return (
    <>
      <h2 className="center">We have {count} Beers Available. Dine In Only!</h2>
      <BeerList />
    </>
  );
}
