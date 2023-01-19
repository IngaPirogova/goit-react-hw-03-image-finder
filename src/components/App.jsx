import React from 'react';
// import axios from 'axios';
import { api } from './service/api';
// import css from './App.module.css'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
// import { toast } from 'react-toastify';

export class App extends React.Component {
  state = {
    searchName: '',
    pictures: [],
    page: 1,
    status: 'idle',
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevState, prevProps) {
    const { searchName, page } = this.state;

    if (prevState.searchName !== searchName || prevState.page !== page) {
      this.setState({ status: 'pending' });
      api.fetchResponce(searchName, page);

      this.setState({ pictures: responce.data.hits });
    }

    if (prevState.page !== this.state.page) {
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...responce.data.hits],
      }));
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Loader />
        <ImageGallery
          pictures={this.state.pictures}
          onClick={this.onClick}
        ></ImageGallery>
        <Button loadingMore={this.loadMore} />
      </div>
    );
  }
}

// const responce = await axios.get(
//   `https://pixabay.com/api/?q=${this.state.searchName}&page=1&key=31233349-657dbeb08b09bae80b555b3c4&image_type=photo&orientation=horizontal&per_page=12`
// );
//  console.log(responce.data.hits)
