import React from 'react';
// import { toast } from 'react-toastify';
// import css from './Searchbar.module.css';
// import PropTypes from 'prop-types';

export class Searchbar extends React.Component {
  state = {
    searchName: '',
  };

  handleNameChenge = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  nandleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
    //   toast.error('Enter a text');
    alert('Enter a text');
      return;
    }
    this.props.onSubmit(this.state.searchName);
    // this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.hangleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleNameChenge}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
