import React from 'react';
import './Favourite.css';

import likesPhotos from '../likesPhotos';

export const Favourite = () => {
  return (
    <>
      <h1>FAVOURITE IMAGES</h1>
      <div className="likes-photos">
        {likesPhotos.map(photo => (
          <div
            key={photo}
            className="likes-photo"
          >
            <img src={photo} alt="something-beauty" />
          </div>
        ))}
      </div>
    </>
  );
};
