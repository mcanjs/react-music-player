
import React, { Component } from 'react';

// Data
import * as fullData from '../../json/songs.json';

// Components
import SongItemBody from './sections/SongItemBody';
import SongItemFooter from './sections/SongItemFooter';


export default class Songs extends Component {
  constructor () {
    super();
    this.data = fullData.default;
  }

  render () {
    return (
      Object.keys( this.data ).map( obj => Object.keys( this.data[ obj ] ).map( ( objKeys ) => {
        const data = this.data[ obj ][ objKeys ];
        return (
          <div key={data.id} className="item col-12 col-md-3 d-flex flex-column" data-artist={obj} data-music-name={data.noSpaceName}>
            <SongItemBody
              image={`${process.env.PUBLIC_URL}/img/${data.image}.jpg`}
              artist={data.tr}
              src={`.${process.env.PUBLIC_URL}/musics/${`${obj}-${data.noSpaceName}`}.mp3`}
              music={data.songName}
              id={data.id}
            />
            <SongItemFooter
              name={data.songName}
              artist={data.tr}
            />
          </div>
        );
      } ) )
    );
  }
}
