import React, { useState } from 'react';
import classNames from 'classnames';
import './Navigation.css';

export const Navigation = () => {
  const [selected, setSelected] = useState(true);

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li
          onClick={() => setSelected(true)}
          className={classNames({
            "navigation-item": true,
            "selected": selected,
          })}
        >
          Gallery
        </li>
        <li
          onClick={() => setSelected(false)}
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
