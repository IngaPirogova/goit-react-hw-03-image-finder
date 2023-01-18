import React from 'react';
import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends React.Component {
  state = {
    searchName: '',
    pictures: [],
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  async componentDidUpdate(prevState, prevProps) {
    if (prevState.searchName !== this.state.searchName) {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${this.state.searchName}&page=1&key=31233349-657dbeb08b09bae80b555b3c4&image_type=photo&orientation=horizontal&per_page=12`
      );
      console.log(response.data.hits)
      return response;
      

    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
       
          <ImageGallery
          pictures={this.state.pictures}
            onClick={this.onClick}          
          ></ImageGallery>
        
        
      </div>
    );
  }
}
