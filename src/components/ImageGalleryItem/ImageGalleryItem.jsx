import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  openModal,
  alt,
}) => {
  return (
    <>
      <li
        className={css.galleryItem}
        key={id}
        // onClick={() => onClick(largeImageURL)}
         onClick={() => openModal(largeImageURL)}
      >
        <img className={css.galleryItem_image} src={webformatURL} alt={alt} />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = { 
  alt: PropTypes.string, 
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,    
  openModal: PropTypes.func.isRequired,
};