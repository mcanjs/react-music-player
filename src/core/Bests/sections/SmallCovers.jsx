
import React, { Component } from 'react';

export default class SmallCover extends Component {
  render () {
    return (
      <div className="item col-md-4">
        <div className="image">
          <img src={`${process.env.PUBLIC_URL}/img/istanbulTrip-small-cover.jpg`} alt="" />
        </div>
        <div className="text h-100 position-absolute justify-content-center align-items-center flex-column text-white">
          <h4>İstanbul Trip</h4>
          <h5>Kural Ne Bilmiyorum</h5>
        </div>
      </div>
    );
  }
}
