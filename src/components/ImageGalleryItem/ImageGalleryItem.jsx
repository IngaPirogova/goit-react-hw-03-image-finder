// import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL } ) => {
  return (
    <>
      <li className="gallery-item"
      key={id}
      onClick={() => (largeImageURL)}
    >li1
        <img src={webformatURL} alt='' />
      </li>
    </>
  );
};
