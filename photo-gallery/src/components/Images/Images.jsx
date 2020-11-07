import React, { useState, useEffect } from 'react';
import './Images.css';
import { Pagination } from '../Pagination';
import { Settings } from '../Settings';

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
          <div className="image">
            <img src={image.download_url} alt="something-beauty" />
          </div>
        ))}
      </div>
      <Pagination
        paginate={paginate}
      />
    </>
  );
};
