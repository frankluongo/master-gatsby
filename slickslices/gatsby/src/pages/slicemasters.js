import React from 'react';
import SliceMasters from '@components/SliceMasters';
import { graphql } from 'gatsby';

export default function SliceMastersPage({ data, pageContext }) {
  const paginationData = {
    pageSize: pageContext.pageSize,
    totalCount: data.slicemasters.totalCount,
    currentPage: pageContext.currentPage,
    skip: pageContext.skip,
  };

  return (
    <>
      {/* <SEO title={`Slicemasters - Page ${pageContext.currentPage || 1}`} /> */}
      <SliceMasters
        slicemasters={data.slicemasters.nodes}
        paginationData={paginationData}
      />
    </>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 4) {
    slicemasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
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
`;
