import React, { Component } from 'react';

import BigCover from '../../core/Bests/sections/BigCover';
import SmallCover from '../../core/Bests/sections/SmallCovers';

export default class YourBest extends Component {
  render () {
    return (
      <section id="your-best">
        <div className="dynamic-content row">
          <div className="big-cover-container col-12">
            <BigCover />
          </div>
          <div className="content-area col-12">
            <h1 className="dynamic-heading">
              Enlerin
            </h1>
          </div>
          <div className="small-covers-container col-12">
            <div className="small-covers only-desktop-height col-12 row">
              <SmallCover />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
