import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onClick,
}) => {
  return (
    <>
      <li
        className={css.galleryItem}
        key={id}
        onClick={() => onClick(largeImageURL)}
      >
        <img className={css.galleryItem_image} src={webformatURL} alt="" />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {  
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,    
  onClick: PropTypes.func.isRequired,
};