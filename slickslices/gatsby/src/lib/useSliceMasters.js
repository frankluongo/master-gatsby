import { graphql, useStaticQuery } from 'gatsby';

export function useSliceMasters() {
  const data = useStaticQuery(graphql`
    query {
      allSanityPerson {
        totalCount
        slicemasters: nodes {
          name
          slug {
            current
          }
          description
          id
          image {
            asset {
              fluid(maxWidth: 410) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const { slicemasters, totalCount } = data.allSanityPerson;
  return { slicemasters, totalCount };
}
