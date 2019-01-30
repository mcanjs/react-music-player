import React, { Component } from 'react';

export default class SearchArea extends Component {
  render () {
    return (
      <div className="search-area col-12 d-flex">
        <i className="material-icons">
                    search
        </i>
        <p className="pl-3">Müzik Ara</p>
      </div>
    );
  }
}
