// import css from './ImageGallery.module.css';
import PropTypes from 'prop-types'; 
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({pictures}) => {
    return(
        <ul>
            {pictures.map(({ id, webformatURL, largeImageURL}) => {
                return (
                    <ImageGalleryItem
                    key={id}
                    largeImageURL={largeImageURL}
                    webformatURL={webformatURL}
                    // onClick={onClick} 
                     />
                )
            })}

        </ul>
    )
}

ImageGallery.propTypes = {
    pictures: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  };