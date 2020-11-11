import React, { useState } from 'react';
import classNames from 'classnames';
import './Navigation.css';

export const Navigation = ({ setFavouriteOn }) => {
  const [selected, setSelected] = useState(true);
  const switchOnGallery = () => {
    setSelected(true);
    setFavouriteOn(false);
  };
  const switchOnFavourite = () => {
    setSelected(false);
    setFavouriteOn(true);
  };

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li
          onClick={switchOnGallery}
          className={classNames({
            "navigation-item": true,
            "selected": selected,
          })}
        >
          Gallery
        </li>
        <li
          onClick={switchOnFavourite}
          className={classNames({
            "navigation-item": true,
            "selected": !selected,
          })}
        >
          Favourite
        </li>
      </ul>
    </nav>
  );
};
