import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Navigation.css';

export const Navigation = () => {
  const [selected, setSelected] = useState(true);

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <Link to="/">
          <li
            className={classNames({
              "navigation-item": true,
              "selected": selected,
            })}
            onClick={() => setSelected(true)}
          >
            Gallery
          </li>
        </Link>
        <Link to="/favourite">
          <li
            className={classNames({
              "navigation-item": true,
              "selected": !selected,
            })}
            onClick={() => setSelected(false)}
          >
            Favourite
          </li>
        </Link>
      </ul>
    </nav>
  );
};
