import $ from 'jquery';

export default class GlobalSongController {
  static GetData () {
    window.pubsub.subscribe( 'songItemData', ( data ) => {
      this.data = data[ '0' ];
      this.target = data[ '1' ];
      this.currentTime = 0;
      this.audioPlayer = document.getElementById( 'audio-player' );
      GlobalSongController.HandleOnClick( this.data, this.audioPlayer );
    } );
  }

  static HandleOnClick ( data, audioPlayer ) {
    const footerImage = document.querySelector( '.footer-corner .current-play-image' );
    const footerCurrentMusic = document.querySelector( '.footer-corner .current-play-info' );
    footerImage.children[ '0' ].setAttribute( 'src', data.image );
    footerCurrentMusic.children[ '0' ].innerHTML = data.artist;
    footerCurrentMusic.children[ '1' ].innerHTML = data.music;
    this.HandleOnPlay( data, audioPlayer );
  }

  static HandleOnPlay ( data, audioPlayer ) {
    const dynamicIcon = document.getElementsByClassName( 'footer-dynamic-icon' )[ 0 ];
    try {
      audioPlayer.setAttribute( 'src', data.src );
    } catch ( error ) {
      console.warn( '@25' );
    }    // Get footer controller
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

  static InitProgressBar ( player, duration, currentTime ) {
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

  static GetCurrentTime ( player, dom ) {
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

  static GetProgressBar ( player, dom ) {
    this.dom = dom;
    this.player = player;
    try {
      this.dom.value = ( this.player.currentTime / this.player.duration );
    } catch ( error ) {
      // do nothing
    }
    this.dom.addEventListener( 'click', ( e ) => { this.SeekingData( e, this.player, this.dom ); } );
  }

  static GetAudioFullTime ( length, dom ) {
    this.dom = dom;
    const minutes = Math.floor( length / 60 );
    const second = length - minutes * 60;
    const secondStr = second.toString();
    const seconds = secondStr.substr( 0, 2 );
    const time = `${minutes}:${seconds}`;
    this.dom.innerText = time;
  }

  static SeekingData ( event, player, dom ) {
    this.event = event;
    this.player = player;
    this.dom = dom;
    const percent = this.event.offsetX / this.event.currentTarget.offsetWidth;
    this.player.currentTime = percent * this.player.duration;
    this.dom.value = percent / 100;
  }

  static FooterController ( player ) {
    this.player = player;
    const prevMusicDom = document.querySelectorAll( '.footer-corner .controls i' )[ 0 ];
    const pausePlayDom = document.querySelectorAll( '.footer-corner .controls i' )[ 1 ];
    const nextMusicDom = document.querySelectorAll( '.footer-corner .controls i' )[ 2 ];
    prevMusicDom.addEventListener( 'click', this.prevMusicClick.bind( this ) );
    pausePlayDom.addEventListener( 'click', ( e ) => { this.PausePlayClick( e, this.player ); } );
    nextMusicDom.addEventListener( 'click', this.nextMusicDom.bind( this ) );
  }

  static PausePlayClick ( e, player ) {
    this.event = e.currentTarget;
    this.player = player;
    if ( this.event.innerText === 'pause' ) {
      this.event.innerText = 'play_arrow';
      this.player.pause();
    } else {
      this.event.innerText = 'pause';
      this.player.play();
    }
  }

  static prevMusicClick () {
    if ( this.data.id !== 0 ) {
      const prevData = this.data.id - 1;
      $( `#music-item${prevData}` ).click();
    }
  }

  static nextMusicDom () {
    if ( this.data.id !== 8 ) {
      const nextData = this.data.id + 1;
      $( `#music-item${nextData}` ).click();
    }
  }
}
GlobalSongController.GetData(); // Initialize
setTimeout( () => {
  GlobalSongController.FooterController( document.getElementById( 'audio-player' ) );
}, 300 ); // Initialize Footer Controller
