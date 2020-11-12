import React from 'react';
import classNames from 'classnames';
import './Pagination.css';

export const Pagination = ({ currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(10).keys()];

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {pageNumbers.map(number => (
          <li
            key={number}
            className={classNames({
              "pagination-item": true,
              "selected": currentPage === (number + 1)
            })}
            onClick={() => setCurrentPage(number + 1)}
          >
            {number + 1}
          </li>
        ))}
      </ul>
    </nav>
  );
};
