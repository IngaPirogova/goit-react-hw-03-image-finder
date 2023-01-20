import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export const ImageGalleryItem = ({
  id,
  largeImageURL,
  webformatURL,
  openModal,
  alt,
}) => {
  return (
    <li className={css.galleryItem} key={id} onClick={() => openModal(largeImageURL)}>
      <img className={css.galleryItem_image} src={webformatURL} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};
