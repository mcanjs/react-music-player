
import React, { Component } from 'react';

import Modal from '../../Modal/Modal';

export default class SongItemFooter extends Component {
  constructor ( props ) {
    super( props );
    this.props = props;
    this.onClickHandle = this.onClickHandle.bind( this );
  }

  onClickHandle ( e ) {
    this.event = e.currentTarget;
    new Modal( 'lyric', this.event );
  }

  render () {
    const { name, artist } = this.props;
    return (
      <div>
        <div className="name">
          <h6 onClick={( e ) => { this.onClickHandle( e ); }} aria-hidden="true">
            {name}
          </h6>
        </div>
        <div className="artist">
          {artist}
        </div>
      </div>
    );
  }
}
