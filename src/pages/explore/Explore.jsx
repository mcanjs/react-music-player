
import React, { Component } from 'react';
import Songs from '../../core/Song/Songs';

export default class Explore extends Component {
  render () {
    return (
      <section id="explore">
        <div className="content-area col-12">
          <h1 className="dynamic-heading">
            Keşfet
          </h1>
        </div>
        <div className="dynamic-content row">
          <Songs />
        </div>
      </section>
    );
  }
}
