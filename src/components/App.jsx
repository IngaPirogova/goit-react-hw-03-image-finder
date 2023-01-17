import React from 'react';
import axios from 'axios';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from './Searchbar/Searchbar';


export class App extends React.Component {
  state = {
    searchName: '',
    pictures: null,
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

componentDidUpdate(prevProps, prevState) {
  if (prevState.searchName !== this.state.searchName) {
    // console.log('prevprops.searchName: ', prevState.searchName)
    // console.log('this.props.searchName: ', this.state.searchName)

    const response = axios.get('https://pixabay.com/api/?q=cat&page=1&key=31233349-657dbeb08b09bae80b555b3c4&image_type=photo&orientation=horizontal&per_page=12');
    return response;
  }
}

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
         <ImageGalleryItem/>
      </div>
    );
  }
}
