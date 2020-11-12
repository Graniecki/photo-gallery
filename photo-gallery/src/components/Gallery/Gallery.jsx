import React, { useState, useEffect } from 'react';
import useLocalStorage from '../useLocalStorage';
import './Gallery.css';

import { Pagination } from '../Pagination';
import { Settings } from '../Settings';

export const Gallery = ({
  likes,
  setLikes,
  setFullScreenImg,
  setOpenFullScreen
}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useLocalStorage('current-page', 1);
  const [imagesPerPage, setImagesPerPage] = useLocalStorage('images-per-page', 15);
  const url = `https://picsum.photos/v2/list?page=${currentPage}&limit=100`;
  const currentImages = images.slice(0, imagesPerPage);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const result = await fetch(url).then(response => response.json());
      setImages(result);
      setLoading(false);
    };

    fetchImages();
  }, [currentPage]);

  const addLikePhoto = (event) => {
    const src = event.currentTarget.querySelector('img').src;
    const heart = event.currentTarget.querySelector('.heart');

    heart.style.opacity = 1;

    setTimeout(() => {
      heart.style.opacity = 0;
    }, 300);

    if (likes.some(photo => photo === src)) {
      return;
    }

    setLikes([src, ...likes]);
  };

  const fullScreen = (event) => {
    const image = event.target.parentElement;
    const { src } = image.querySelector('img');

    setFullScreenImg(src);
    setOpenFullScreen(true);
  };

  if (loading) {
    return <h2 className="loading">Loading ...</h2>;
  }

  return (
    <>
      <Settings
        imagesPerPage={imagesPerPage}
        setImagesPerPage={setImagesPerPage}
      />
      <div className="images">
        {currentImages.map(image => (
          <div
            key={image.id}
            className="image"
            onDoubleClick={addLikePhoto}
          >
            <img src={image.download_url} alt="something-beauty" />
            <span className="heart">&#10084;</span>
            <span
              className="fullscreen-icon"
              onClick={fullScreen}
            >
              &#x26F6;
            </span>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
