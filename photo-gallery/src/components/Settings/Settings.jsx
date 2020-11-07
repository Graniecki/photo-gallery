import React from 'react';
import './Settings.css';

export const Settings = ({ imagesPerPage, setPostsPerPage }) => {
  const changeCount = (event) => {
    const { value } = event.target;

    setPostsPerPage(+value);
  };

  return (
    <form className="settings">
      <label htmlFor="picture-count">
        Images per page:
      </label>
      <input
        className="image-count"
        type="number"
        id="picture-count"
        min="1"
        max="100"
        placeholder="max - 100"
        value={imagesPerPage}
        onChange={changeCount}
      />
    </form>
  );
};
