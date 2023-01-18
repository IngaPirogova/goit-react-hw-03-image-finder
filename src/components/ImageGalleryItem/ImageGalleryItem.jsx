// import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onClick,
}) => {
  return (
    <>
      <li
        className="gallery-item"
        key={id}
        onClick={() => onClick(largeImageURL)}
      >
        <img src={webformatURL} alt="" />
      </li>
    </>
  );
};
