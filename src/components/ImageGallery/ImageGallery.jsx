import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ pictures }) => {
  return (
    <ul className={css.imageGalleryList}>
      {pictures.map(({ id, webformatURL, largeImageURL, tag }) => {
        return (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            tag={tag}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
};
