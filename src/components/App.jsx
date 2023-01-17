import React from 'react';
// import { ToastContainer } from 'react-toastify';
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
  if (prevProps.searchName !== this.props.searchName) {
    console.log('prevprops.searchName: ', prevProps.searchName)
    console.log('this.props.searchName: ', this.props.searchName)

    fetch('https://pixabay.com/api/?q=cat&page=1&key=31233349-657dbeb08b09bae80b555b3c4&image_type=photo&orientation=horizontal&per_page=12')
    .then(res => res.json())
    .then(console.log)
  }
}



  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ToastContainer autoClose={3000} /> */}
      </div>
    );
  }
}
