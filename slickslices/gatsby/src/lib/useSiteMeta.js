import { graphql, useStaticQuery } from 'gatsby';

export function useSiteMeta() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
        }
      }
    }
  `);

  const { siteMetadata } = data.site;
  return siteMetadata;
}
