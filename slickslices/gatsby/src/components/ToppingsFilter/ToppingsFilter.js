import React from 'react';
import { useToppings } from '@lib';
import { Link } from 'gatsby';
import { ToppingsFilterStyled } from './ToppingsFilterStyled';

export default function ToppingsFilter() {
  const { pizzasInToppings } = useToppings();
  // Get a list of all toppings
  // Get a list of all pizzas with their toppings
  // Count how many pizzas are in each topping
  // Loop over the list of toppings and display the topping the count of pizzas in that topping
  // link it up
  return (
    <ToppingsFilterStyled>
      <Link to="/pizzas" className="name">
        <span className="name">All</span>
        <span className="count">{pizzasInToppings.length}</span>
      </Link>
      {pizzasInToppings.map((topping) => (
        <Link to={`/topping/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsFilterStyled>
  );
}
