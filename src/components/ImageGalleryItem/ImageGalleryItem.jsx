import css from './ImageGalleryItem.module.css';

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
