
import React, { Component } from 'react';

export default class SongItemBody extends Component {
  constructor ( props ) {
    super( props );
    this.props = props;
  }

  handleOnClick ( e ) {
    this.target = e.currentTarget;
    this.allData = [this.props, this.target];
    window.pubsub.publish( 'songItemData', [this.allData] );
  }

  render () {
    const { image, artist, id } = this.props;
    return (
      <div>
        <div id={`music-item${id}`} className="image" onClick={( e ) => { this.handleOnClick( e ); }} aria-hidden="true">
          <i className="material-icons fs-48 play">play_circle_outline</i>
          <img src={image} alt={`Groove ${artist}`} />
        </div>
      </div>
    );
  }
}
