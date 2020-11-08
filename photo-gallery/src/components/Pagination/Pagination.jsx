import React from 'react';
import './Pagination.css';

export const Pagination = ({ paginate }) => {
  const pageNumbers = [...Array(10).keys()];

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {pageNumbers.map(number => (
          <li
            key={number}
            className="pagination-item"
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </li>
        ))}
      </ul>
    </nav>
  );
};
