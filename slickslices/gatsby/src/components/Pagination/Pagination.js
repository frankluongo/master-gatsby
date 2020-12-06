import { Link } from 'gatsby';
import React from 'react';
import { PaginationStyled } from './PaginationStyled';

export default function Pagination({
  pageSize,
  totalCount,
  currentPage = 1,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNext = nextPage <= totalPages;
  const hasPrev = prevPage >= 1;
  const pagesArr = Array.from({ length: totalPages });

  return (
    <PaginationStyled>
      <Link disabled={!hasPrev} to={`/${base}/${prevPage}`}>
        ← Prev
      </Link>
      {pagesArr.map((_, i) => (
        <Link
          key={i}
          className={currentPage === 1 && i === 0 ? 'active' : ''}
          to={`/${base}/${i > 0 ? i + 1 : ''}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link disabled={!hasNext} to={`/${base}/${nextPage}`}>
        Next →
      </Link>
    </PaginationStyled>
  );
}
