
import React, { Component } from 'react';

// My Imports
import GlobalBestController from '../GlobalBestController';

// Static data
import * as fullData from '../../../json/your-best.json';

export default class BigCover extends Component {
  constructor () {
    super();
    this.data = fullData.default;
    this.audioPlayer = document.getElementById( 'audio-player' );
  }

  componentDidMount () {
    setTimeout( () => {
      const bigCoverContainer = document.getElementsByClassName( 'big-cover' )[ 0 ].children[ 0 ].children[ 0 ];
      const contentArea = document.getElementsByClassName( 'content-area' )[ 0 ];
      const spacing = bigCoverContainer.height - 30;
      contentArea.setAttribute( 'style', `margin-top: ${spacing}px` );
    }, 300 );
  }

  handleOnClick ( data ) {
    this.data = data;
    const footerImage = document.querySelector( '.footer-corner .current-play-image' );
    const footerCurrentMusic = document.querySelector( '.footer-corner .current-play-info' );
    // eslint-disable-next-line max-len
    footerImage.children[ '0' ].setAttribute( 'src', `${process.env.PUBLIC_URL}/img/${this.data.bigCover.noSpaceArtist}-${this.data.bigCover.noSpaceName}.jpg` );
    footerCurrentMusic.children[ '0' ].innerHTML = this.data.bigCover.artist;
    footerCurrentMusic.children[ '1' ].innerHTML = this.data.bigCover.songName;
    new GlobalBestController( this.data );
  }

  render () {
    return (
      <div className="big-cover col-12" onClick={() => { this.handleOnClick( this.data ); }} aria-hidden="true">
        <div className="image">
          <img src={`${process.env.PUBLIC_URL}/img/${this.data.bigCover.cover}.jpg`} alt="" />
        </div>
        <div className="text w-100 h-100 position-absolute justify-content-center align-items-center flex-column text-white">
          <h1>
            {this.data.bigCover.artist}
          </h1>
          <h3>
            {this.data.bigCover.songName}
          </h3>
        </div>
      </div>
    );
  }
}
