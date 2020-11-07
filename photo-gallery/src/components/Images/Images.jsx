import React, { useState, useEffect } from 'react';
import './Images.css';
import { Pagination } from '../Pagination';
import { Settings } from '../Settings';

import likesPhotos from '../likesPhotos';

export const Images = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setPostsPerPage] = useState(15);
  const url = `https://picsum.photos/v2/list?page=${currentPage}&limit=100`;

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const result = await fetch(url).then(response => response.json());
      setImages(result);
      setLoading(false);
    };

    fetchImages();
  }, [currentPage]);

  const currentImages = images.slice(0, imagesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const addLikePhoto = (event) => {
    const imageBlock = event.target.closest('.image');
    const src = imageBlock.querySelector('img').src;
    const heart = imageBlock.querySelector('.heart');

    heart.style.opacity = 1;
    setTimeout(() => {
      heart.style.opacity = 0;
    }, 300);

    if (likesPhotos.some(photo => photo === src)) {
      return;
    }

    likesPhotos.push(src);
  };

  if (loading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <>
      <Settings
        imagesPerPage={imagesPerPage}
        setPostsPerPage={setPostsPerPage}
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
          </div>
        ))}
      </div>
      <Pagination
        paginate={paginate}
      />
    </>
  );
};
