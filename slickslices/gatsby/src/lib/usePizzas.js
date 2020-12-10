import { graphql, useStaticQuery } from 'gatsby';

export function usePizzas() {
  const data = useStaticQuery(graphql`
    query {
      allSanityPizza {
        pizzas: nodes {
          name
          id
          price
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
  `);

  const { pizzas } = data.allSanityPizza;
  return pizzas;
}
