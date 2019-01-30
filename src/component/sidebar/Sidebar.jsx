import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

export default class Sidebar extends Component {
  render () {
    return (
      <div className="main-corner static only-desktop-height col-md-4 position-fixed">
        <div className="container">
          <div className="header">
            <h3>Groove</h3>
          </div>
          <div className="taps-parent">
            <div className="taps-child active d-flex align-items-center" data-this="explore">
              <Link to="/kesfet">
                <div className="icon">
                  <i className="material-icons">
                                        explore
                  </i>
                </div>
                <div className="text">
                                    Keşfet
                </div>
              </Link>
            </div>
            <div className="taps-child d-flex align-items-center" data-this="your-best">
              <Link to="/enlerin">
                <div className="icon">
                  <i className="material-icons">
                    headset
                  </i>
                </div>
                <div className="text">
                  Enlerin
                </div>
              </Link>
            </div>
            <div className="taps-child d-flex align-items-center" data-this="play-list">
              <div className="icon">
                <i className="material-icons">
                                    playlist_play
                </i>
              </div>
              <div className="text">
                                Çalma Listen
              </div>
            </div>
          </div>
          {/* Profile Image */}
          <div className="profile d-flex flex-row position-absolute">
            <div className="profile-image">
              <img src={`/${process.env.PUBLIC_URL}img/pp.jpeg`} alt="PP" />
            </div>
            <div className="profile-name col-9 col-md-12 d-flex flex-row align-items-center">
              <h5 className="pl-0 pl-md-4 m-0">
                                Mehmet Can Kızılyer
              </h5>
              <small className="membership-type ml-auto">
                                (Premium)
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
