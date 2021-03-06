import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '@components/PizzaList';
import ToppingsFilter from '@components/ToppingsFilter';
import SEO from '@components/SEO';

export default function PizzasPage({ data, pageContext }) {
  const pizzas = data.pizzas.nodes;
  const { topping } = pageContext;
  return (
    <>
      <SEO title={topping ? `Pizzas With ${topping}` : `All Pizzas`} />
      <ToppingsFilter />
      <PizzaList pizzas={pizzas} />
    </>
  );
}

export const pageQuery = graphql`
  query PizzaQuery($topping: [String]) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
