export default class GlobalBestController {
  constructor ( data ) {
    this.data = data;
    this.audioPlayer = document.getElementById( 'audio-player' );
    this.HandleOnPlay( this.data, this.audioPlayer );
  }

  HandleOnPlay ( data, audioPlayer ) {
    const dynamicIcon = document.getElementsByClassName( 'footer-dynamic-icon' )[ 0 ];
    // eslint-disable-next-line max-len
    audioPlayer.setAttribute( 'src', `${process.env.PUBLIC_URL}/musics/${this.data.bigCover.noSpaceArtist}-${this.data.bigCover.noSpaceName}.mp3` );     // Get footer controller
    if ( audioPlayer.played === false ) {
      // pause
      dynamicIcon.innerText = 'play_arrow';
      audioPlayer.pause();
    } else {
      // play
      dynamicIcon.innerText = 'pause';
      audioPlayer.play();
      setTimeout( () => {
        this.InitProgressBar( audioPlayer, audioPlayer.duration, audioPlayer.currentTime );
      }, 300 );
    }
  }

  InitProgressBar ( player, duration, currentTime ) {
    this.player = player;
    this.currentTime = currentTime;
    const currentTimeDOM = document.getElementsByClassName( 'current-time' )[ 0 ].children[ 0 ];
    const endTimeDOM = document.getElementsByClassName( 'end-time' )[ 0 ].children[ 0 ];
    const progressBarDOM = document.getElementById( 'footer-progress' );
    this.player.addEventListener( 'timeupdate', () => {
      this.GetCurrentTime( this.player, currentTimeDOM );
      setTimeout( () => {
        this.GetProgressBar( this.player, progressBarDOM );
      }, 1000 ); // Async..
    } );
    this.GetAudioFullTime( duration, endTimeDOM );
  }

  GetCurrentTime ( player, dom ) {
    this.dom = dom;
    this.currentTime = player.currentTime;
    // const current_hour = parseInt( currentTime / 3600 ) % 24;
    const currentMinute = parseInt( this.currentTime / 60 ) % 60;
    const currentSecondLong = this.currentTime % 60;
    const currentSeconds = currentSecondLong.toFixed();
    let time = '';
    time = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
    this.dom.innerHTML = time;
  }

  GetProgressBar ( player, dom ) {
    this.dom = dom;
    this.player = player;
    try {
      this.dom.value = ( this.player.currentTime / this.player.duration );
    } catch ( error ) {
      // do nothing
    }
    this.dom.addEventListener( 'click', ( e ) => { this.SeekingData( e, this.player, this.dom ); } );
  }

  GetAudioFullTime ( length, dom ) {
    this.dom = dom;
    const minutes = Math.floor( length / 60 );
    const second = length - minutes * 60;
    const secondStr = second.toString();
    const seconds = secondStr.substr( 0, 2 );
    const time = `${minutes}:${seconds}`;
    this.dom.innerText = time;
  }

  SeekingData ( event, player, dom ) {
    this.event = event;
    this.player = player;
    this.dom = dom;
    const percent = this.event.offsetX / this.event.currentTarget.offsetWidth;
    this.player.currentTime = percent * this.player.duration;
    this.dom.value = percent / 100;
  }

  static FooterController ( player ) {
    this.player = player;
    const pausePlayDom = document.querySelectorAll( '.footer-corner .controls i' )[ 1 ];
    pausePlayDom.addEventListener( 'click', ( e ) => { this.PausePlayClick( e, this.player ); } );
  }

  static PausePlayClick ( e, player ) {
    this.event = e.currentTarget;
    this.player = player;
    if ( this.event.innerText === 'pause' ) {
      this.event.innerText = 'pause';
      this.player.play();
    } else {
      this.event.innerText = 'play_arrow';
      this.player.pause();
    }
  }
}
setTimeout( () => {
  GlobalBestController.FooterController( document.getElementById( 'audio-player' ) );
}, 1000 );
