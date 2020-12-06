import React from 'react';
import { useBeers } from '@lib';
import { BeerListStyled, SingleBeerStyled } from './BeerListStyled';

export default function BeerList() {
  const { beers } = useBeers();
  return (
    <BeerListStyled>
      {beers.map((beer) => (
        <SingleBeer key={beer.id} beer={beer} />
      ))}
    </BeerListStyled>
  );
}

function SingleBeer({ beer }) {
  const rating = Math.round(beer.rating.average);
  return (
    <SingleBeerStyled>
      <img src={beer.image} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.price}</p>
      <p className="rating" title={`${rating} out of 5 stars`}>
        <div className="rating__content">
          <span>{`⭐`.repeat(rating)}</span>
          <span style={{ filter: `grayscale(100%)` }}>
            {`⭐`.repeat(5 - rating)}
          </span>
          <span style={{ marginLeft: '1rem' }}>{beer.rating.reviews}</span>
        </div>
      </p>
    </SingleBeerStyled>
  );
}
