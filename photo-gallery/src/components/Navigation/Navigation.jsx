import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/">Gallery</Link>
        </li>
        <li className="navigation-item">
          <Link to="/favourite">Favourite</Link>
        </li>
      </ul>
  </nav>

  );
};
