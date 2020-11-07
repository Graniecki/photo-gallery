import React from 'react';
import './Pagination.css';

export const Pagination = ({ paginate }) => {
  const pageNumbers = [...Array(10).keys()];

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {pageNumbers.map(number => (
          <a
            key={number}
            onClick={() => paginate(number + 1)} href={`#${number + 1}`}
          >
            <li className="pagination-items">
              {number + 1}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
};
