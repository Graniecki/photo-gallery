import React from 'react';
import classNames from 'classnames';
import './Navigation.css';

export const Navigation = ({ favouriteOn, setFavouriteOn }) => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li
          onClick={() => setFavouriteOn(false)}
          className={classNames({
            "navigation-item": true,
            "selected": !favouriteOn,
          })}
        >
          Gallery
        </li>
        <li
          onClick={() => setFavouriteOn(true)}
          className={classNames({
            "navigation-item": true,
            "selected": favouriteOn,
          })}
        >
          Favourite
        </li>
      </ul>
    </nav>
  );
};
