import React, { SyntheticEvent } from 'react';
import Pagination from '@atlaskit/pagination';
import { calculateNumberOfPages } from '../utils';

interface IPaginatorProps {
  cardsPerPage: number;
  totalPages: number;
  currentPage: number;
  onChangePage: (_: SyntheticEvent, pageNumber: number) => void;
}

export const Paginator: (props: IPaginatorProps) => JSX.Element = ({
  totalPages,
  currentPage,
  onChangePage,
  cardsPerPage,
}: IPaginatorProps) => {
  const pages = calculateNumberOfPages(totalPages, cardsPerPage);
  return (
    <Pagination
      innerStyles={{
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
      }}
      pages={pages}
      selectedIndex={currentPage - 1}
      onChange={onChangePage}
    />
  );
};
