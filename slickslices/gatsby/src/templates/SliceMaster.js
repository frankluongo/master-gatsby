import React from 'react';
import { graphql } from 'gatsby';
import SingleSliceMaster from '@components/SliceMaster';

export default function SliceMaster({ data }) {
  return (
    <div>
      <SingleSliceMaster master={data.sanityPerson} singlePage />
    </div>
  );
}

export const query = graphql`
  query($id: String!) {
    sanityPerson(id: { eq: $id }) {
      name
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
      slug {
        current
      }
    }
  }
`;
