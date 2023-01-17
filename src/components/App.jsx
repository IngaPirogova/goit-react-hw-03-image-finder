import React from 'react';
// import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';


export class App extends React.Component {
  state = {
    searchName: '',
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ToastContainer autoClose={3000} /> */}
      </div>
    );
  }
}
