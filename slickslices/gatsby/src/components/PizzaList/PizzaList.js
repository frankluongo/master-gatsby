import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { PizzaListStyled, SingleZaStyled } from './PizzaListStyled';

export default function PizzaList({ pizzas }) {
  return (
    <PizzaListStyled>
      {pizzas.map((za) => (
        <SingleZa za={za} key={za.id} />
      ))}
    </PizzaListStyled>
  );
}

function SingleZa({ za }) {
  return (
    <SingleZaStyled>
      <Link to={`/pizza/${za.slug.current}`}>
        <h2>
          <span className="mark">{za.name}</span>
        </h2>
      </Link>
      <p>{za.toppings.map((top) => top.name).join(', ')}</p>
      <Img fluid={za.image.asset.fluid} alt={za.name} />
    </SingleZaStyled>
  );
}
