import React from 'react';
import { api } from './service/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import css from './App.module.css'

export class App extends React.Component {
  state = {
    searchName: '',
    pictures: [],
    page: 1,   
    status: 'idle', 
    loadingMore: false,
    showModal: false,
    
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName, page: 1, pictures: [], });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

openModal = largeImageURL => {
  console.log(largeImageURL);
  this.setState({
    showModal: true,
    largeImageURL: this.largeImageURL,
  });
};

closeModal = () => {
  this.setState({
    showModal: false,
  });
};

    async componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;

    if (prevState.searchName !== searchName) {
      const response = await api.fetchResponce(searchName, page);
      this.setState({ pictures: response });
    }

    if (prevState.page !== page) {
      const response = await api.fetchResponce(searchName, page);
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...response],
      }));
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* { this.status === 'pending' &&} */}
       <Loader />
        <ImageGallery
          pictures={this.state.pictures}
          openModal={this.openModal}
        ></ImageGallery>
        {/* {this.status === 'resolved' && this.loadingMore && } */}
        <Button loadMore={this.loadMore} />
        {this.showModal && ( 
          <Modal largeImageURL={this.largeImageURL} onClose={this.closeModal}/>

        )}
        
      </div>
    );
  }
}

// const responce = await axios.get(
//   `https://pixabay.com/api/?q=${this.state.searchName}&page=1&key=31233349-657dbeb08b09bae80b555b3c4&image_type=photo&orientation=horizontal&per_page=12`
// );
//  console.log(responce.data.hits)










