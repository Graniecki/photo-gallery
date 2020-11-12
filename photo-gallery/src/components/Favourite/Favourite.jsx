import React from 'react';
import './Favourite.css';

export const Favourite = ({
  likes,
  setLikes,
  setFullScreenImg,
  setOpenFullScreen
}) => {
  const removePhoto = (event) => {
    const removeIcon = event.target;
    const { src } = removeIcon.nextSibling;
    const likedPhoto = removeIcon.parentElement;

    likedPhoto.style.opacity = 0;
    setTimeout(() => {
      setLikes(likes.filter(photo => photo !== src));
    }, 400);
  };

  const fullScreen = (event) => {
    const image = event.target.parentElement;
    const { src } = image.querySelector('img');

    setFullScreenImg(src);
    setOpenFullScreen(true);
  };

  return (
    <>
      {likes.length === 0
        ? (
          <div className="no-likes">
            <span className="title">No favorite photos yet!</span>
            <span className="smile">&#129320;</span>
          </div>
        )
        : (
          <div className="likes-photos">
            {likes.map(photo => (
              <div
                key={photo}
                className="likes-photo"
              >
                <div
                  className="remove-photo"
                  onClick={removePhoto}
                >
                  &#10006;
                </div>
                <img src={photo} alt="something-beauty" />
                <span
                  className="fullscreen-icon"
                  onClick={fullScreen}
                >
                  &#x26F6;
                </span>
              </div>
            ))}
          </div>
        )}
    </>
  );
};
