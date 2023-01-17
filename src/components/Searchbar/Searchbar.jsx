import React from "react";
import css.

export class Searchbar extends React.Component {
    state = {
        searchName: '',
    }

    handleNameChenge = event => {
        this.setState({searchName: event.currentTarget.value.toLowerCase()});
    };

    nandleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchName);
        this.setState({ searchName: '' });
    };

    render() {
        return (
            <header className="searchbar">
  <form class="form" onSubmit={this.hangleSubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      name='searchName'
      value={this.state.searchName}
      onChange={this.handleNameChenge}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}