import React, { useContext } from 'react';
import './Favourite.css';

import { Context } from '../Context';

export const Favourite = () => {
  const { likes, setLikes } = useContext(Context);
  const removePhoto = (event) => {
    const { src } = event.target.nextSibling;

    event.target.parentElement.style.opacity = 0;
    setTimeout(() => {
      setLikes(likes.filter(photo => photo !== src));
    }, 400);
  };
  const visibleRemove = (event) => {
    const likesPhoto = event.target.parentElement;
    const removePhoto = likesPhoto.querySelector('.remove-photo');

    removePhoto.style.opacity = 1;
  };
  const unvisibleRemove = (event) => {
    const likesPhoto = event.target.parentElement;
    const removePhoto = likesPhoto.querySelector('.remove-photo');

    removePhoto.style.opacity = 0;
  };

  return (
    <>
      <div className="likes-photos">
        {likes.map(photo => (
          <div
            key={photo}
            className="likes-photo"
            onMouseOver={visibleRemove}
            onMouseLeave={unvisibleRemove}
          >
            <div
              className="remove-photo"
              onClick={removePhoto}
            >
              &#10006;
            </div>
            <img src={photo} alt="something-beauty" />
          </div>
        ))}
      </div>
      {likes.length === 0 && (
        <div className="no-likes">
          <span className="title">No favorite photos yet!</span>
          <span className="smile">&#129320;</span>
        </div>
      )}
    </>
  );
};
