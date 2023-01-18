import React from 'react';
import axios from 'axios';
// import css from './App.module.css'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
// import { toast } from 'react-toastify';

export class App extends React.Component {
  state = {
    searchName: '',
    pictures: [],
    page: 1,
    loading: false,
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.searchName !== this.state.searchName ||
        prevState.page !== this.state.page) {
      const responce = await axios.get(
        `https://pixabay.com/api/?q=${this.state.searchName}&page=1&key=31233349-657dbeb08b09bae80b555b3c4&image_type=photo&orientation=horizontal&per_page=12`
      );
      //  console.log(responce.data.hits)
      this.setState({ pictures: responce.data.hits });
    }

    if (prevState.page !== this.state.page) {
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...this.data.hits]
      }))
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
        <Button onClick={this.loadMore} />  
      </div>
    );
  }
}
