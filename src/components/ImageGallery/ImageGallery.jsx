import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ pictures, openModal }) => {
  return (
    <ul className={css.imageGalleryList}>
      {pictures.map(({ id, webformatURL, largeImageURL, tag }) => {
        return (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            src={webformatURL}
            alt={tag}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tag: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};
