import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '@components/SEO';

const PizzaGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export default function SinglePizza({ data: { pizza } }) {
  const { image, name, toppings } = pizza;
  return (
    <>
      <SEO image={image?.asset?.fluid?.src} title={name} />
      <PizzaGrid>
        <Img fluid={image.asset.fluid} />
        <div>
          <h2 className="mark">{name}</h2>
          <ul>
            {toppings.map((topping) => (
              <li key={topping.id}>{topping.name}</li>
            ))}
          </ul>
        </div>
      </PizzaGrid>
    </>
  );
}

export const query = graphql`
  query($id: String!) {
    pizza: sanityPizza(id: { eq: $id }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
