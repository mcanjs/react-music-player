import React, { Component } from 'react';

export default class Footer extends Component {
  constructor ( data ) {
    super();
    this.data = data;
  }

  render () {
    return (
      <div className="footer-corner w-100 d-flex flex-row position-fixed">
        <div className="left h-100 col-3 row d-flex align-items-center">
          <div className="current-play-image col-3">
            <img src={`${process.env.PUBLIC_URL}/img/not-music.jpg`} alt="" />
          </div>
          <div className="col-9 current-play-info">
            <p className="m-0 font-weight-bold"> ----- </p>
            <small>----</small>
          </div>
        </div>
        <div className="right col-9 d-flex align-items-center">
          <div className="col-3 d-flex justify-content-end">
            <div className="controls">
              <i className="material-icons pr-2">arrow_back_ios</i>
              <i className="material-icons footer-dynamic-icon">play_arrow</i>
              <i className="material-icons pl-3">arrow_forward_ios</i>
            </div>
          </div>
          <div className="time col-9 d-flex flex-row align-items-center">
            <div className="current-time col-2 pr-0 text-right">
              <small>-:-</small>
            </div>
            <div className="col-10 d-flex mt-1 ml-1 pl-0 pr-0">
              <progress id="footer-progress" className="w-100 m-1" value="0" max="1" />
            </div>
            <div className="end-time col-1 pl-0">
              <small>-:-</small>
            </div>
          </div>
        </div>
        <audio
          id="audio-player"
          preload="auto"
          onPlay={this.HandleOnPlay}
        />
      </div>
    );
  }
}
