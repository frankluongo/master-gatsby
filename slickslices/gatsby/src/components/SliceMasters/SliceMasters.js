import React from 'react';
import Pagination from '@components/Pagination';
import SliceMaster from '@components/SliceMaster';
import { SliceMastersStyled } from './SliceMastersStyled';

export default function SliceMasters({ paginationData, slicemasters }) {
  const { pageSize, totalCount, currentPage, skip } = paginationData;
  return (
    <>
      <WrappedPagination />
      <SliceMastersStyled>
        {slicemasters.map((slicemaster) => (
          <SliceMaster master={slicemaster} key={slicemaster.id} />
        ))}
      </SliceMastersStyled>
      <WrappedPagination />
    </>
  );

  function WrappedPagination() {
    return (
      <Pagination
        base="slicemasters"
        pageSize={pageSize || process.env.GATSBY_PAGE_SIZE}
        totalCount={totalCount}
        currentPage={currentPage}
        skip={skip}
      />
    );
  }
}

SliceMasters.defaultProps = {
  slicemasters: [],
};
