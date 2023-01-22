import React from 'react';
import { api } from './service/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import toast, { Toaster } from 'react-hot-toast';
import { animateScroll } from 'react-scroll';

export class App extends React.Component {
  state = {
    searchName: '',
    pictures: [],
    page: 1,
    status: 'idle',
    showModal: false,
    loading: false,
    largeImageURL: null,
    isVisibleBtn: false,    
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;
    

    if (prevState.searchName !== searchName) {
      this.setState({ loading: true });

      const response = await api.fetchResponce(searchName, page);
      console.log(response);

      if (response.hits <= 0) {
        // console.log(response.hits);
        toast.error(`Not found "${searchName}"`);
        return;
      } else {
        toast.success(`By "${searchName}" found "${response.total}" images`);
      }

      this.setState({
        pictures: response.hits,
        loading: false,
        isVisibleBtn: true,
      });
    }

    if (prevState.page !== page) {
      const response = await api.fetchResponce(searchName, page);
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...response.hits],
      }));
    }
  }

  handleFormSubmit = searchName => {
    this.setState({ searchName, page: 1, pictures: [], status: 'idle', isVisibleBtn: false });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.scrollOnMoreButton();
  };

  scrollOnMoreButton = () => {
    animateScroll.scrollToBottom({
      duration: 1000,
      delay: 10,
      smooth: 'linear',
    });
  };

  openModal = largeImageURL => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { pictures, largeImageURL, showModal, loading, isVisibleBtn } =
      this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {loading && <Loader />}

        <ImageGallery pictures={pictures} openModal={this.openModal} />

        {isVisibleBtn && <Button loadMore={this.loadMore} />}

        {showModal ? (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        ) : null}

        <Toaster autoClose={2000} />
      </div>
    );
  }
}



// const responce = await axios.get(
//   `https://pixabay.com/api/?q=${this.state.searchName}&page=1&key=31233349-657dbeb08b09bae80b555b3c4&image_type=photo&orientation=horizontal&per_page=12`
// );
//  console.log(responce.data)
