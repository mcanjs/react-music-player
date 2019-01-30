import $ from 'jquery';

export default class AudioPlayer {
  static KeyBinding ( event, player ) {
    // if press space current song pause || play
    this.SpaceKeyBinding( event, player );
    // if press right arrow and left arrow prev music || next music
    this.ArrowKeyBinding( event, player );
  }

  static SpaceKeyBinding ( event, player ) {
    this.player = player;
    const pausePlayDom = document.querySelectorAll( '.footer-corner .controls i' )[ 1 ];
    if ( event.keyCode === 32 && this.player.paused ) {
      this.player.play();
      pausePlayDom.innerText = 'pause';
    } else if ( event.keyCode === 32 && this.player.played ) {
      pausePlayDom.innerText = 'play_arrow';
      this.player.pause();
    }
  }

  static ArrowKeyBinding ( event, player ) {
    this.player = player;
    const prevMusicDom = document.querySelectorAll( '.footer-corner .controls i' )[ 0 ];
    const nextMusicDom = document.querySelectorAll( '.footer-corner .controls i' )[ 2 ];
    console.log( 'work' );
    if ( event.keyCode === 37 && this.player.played.length === 1 ) {
      $( prevMusicDom ).click();
    } else if ( event.keyCode === 39 && this.player.played.length === 1 ) {
      $( nextMusicDom ).click();
    }
  }

  static AutoNextSong ( player, lastMusic ) {
    const lastMusicNum = parseInt( lastMusic.split( 'music-item' )[ 1 ] );
    if ( lastMusicNum !== 8 ) {
      $( `#music-item${lastMusicNum + 1}` ).click();
    }
  }
}

document.body.addEventListener( 'keyup', ( e ) => { AudioPlayer.KeyBinding( e, document.getElementById( 'audio-player' ) ); } );
setTimeout( () => {
  const player = document.getElementById( 'audio-player' );
  window.pubsub.subscribe( 'currentMusicData', ( currentMusicId ) => {
    player.addEventListener( 'ended', () => { AudioPlayer.AutoNextSong( player, currentMusicId ); } );
  } );
}, 300 );
