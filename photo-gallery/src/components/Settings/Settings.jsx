import React from 'react';
import './Settings.css';

export const Settings = ({ imagesPerPage, setPostsPerPage }) => {
  const changeCount = (event) => {
    event.preventDefault();

    const { value } = event.target.querySelector('.image-count');

    setPostsPerPage(+value);
  };

  return (
    <form
      className="settings"
      onSubmit={changeCount}
    >
      <label htmlFor="picture-count">
        Images per page:
      </label>
      <input
        className="image-count"
        type="number"
        id="picture-count"
        min="1"
        max="100"
        defaultValue={imagesPerPage}
      />
      <button
        className="submit-button"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};
