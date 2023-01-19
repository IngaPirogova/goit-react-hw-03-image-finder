import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export const ImageGalleryItem = ({
  webformatURL,
  toggleModal,
  alt,
}) => {
  return (
    <>
      <li className={css.galleryItem}>
        <img
          className={css.galleryItem_image}
          src={webformatURL}
          alt={alt}
          onClick={toggleModal}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func,
};
