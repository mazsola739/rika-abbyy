import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { PaginationProps } from './Pagination.props';
import { ArrowLeft, ArrowRight } from '../Icons/Icons';

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    onPageChange(selectedItem.selected + 1);
  };

  return (
    <div className={styles['pagination-container']}>
      <ReactPaginate
        previousLabel={
          <span className={styles['page-button']}>
            <ArrowLeft /> Previous
          </span>
        }
        nextLabel={
          <span className={styles['page-button']}>
            Next <ArrowRight />
          </span>
        }
        breakLabel="..."
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
        previousClassName={styles['page-item']}
        nextClassName={styles['page-item']}
        pageClassName={styles['page-item']}
        breakClassName={styles['break-item']}
      />
    </div>
  );
};

export default Pagination;
