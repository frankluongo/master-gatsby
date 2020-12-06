import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { SliceMasterStyled } from './SliceMasterStyled';

export default function SliceMaster({ master, singlePage }) {
  return (
    <SliceMasterStyled data-single-page={singlePage}>
      <Link to={`/slicemaster/${master.slug.current}`}>
        <h2 className="mark">{master.name}</h2>
      </Link>
      <Img fluid={master.image.asset.fluid} alt={master.name} />
      <p className="description">{master.description}</p>
    </SliceMasterStyled>
  );
}

SliceMaster.defaultProps = {
  singlePage: false,
};
