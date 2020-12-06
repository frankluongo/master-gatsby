import { graphql, useStaticQuery } from 'gatsby';

export function useBeers() {
  const data = useStaticQuery(graphql`
    query {
      allBeer {
        beers: nodes {
          name
          price
          rating {
            average
            reviews
          }
          image
          id
        }
      }
    }
  `);

  const { beers } = data.allBeer;
  return { beers, count: beers.length };
}
