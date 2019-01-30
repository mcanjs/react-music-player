// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
} from 'react-router-dom';
import pubsub from 'pubsub.js';

// Global variables
window.pubsub = pubsub;

// My Import Files
import Sidebar from './component/sidebar/Sidebar.jsx';
import Footer from './component/footer/footer.jsx';
import DynamicArea from './component/dynamic-area/DynamicArea.jsx';
import GlobalSongController from './core/Song/GlobalSongController';
import * as serviceWorker from './serviceWorker';

// Audio Player
import AudioPlayer from './core/AudioPlayer/AudioPlayer';

// SCSS
import './base-scss/style.scss';


// Global Song Controller INIT
new GlobalSongController();

// Audio Player Actions INIT
new AudioPlayer();

ReactDOM.render(
  <HashRouter>
    <div className="only-desktop-height">
      <div className="only-desktop-height d-flex flex-column flex-md-row col-md-12 p-0">
        <Sidebar />
        <DynamicArea />
      </div>
      <div className="d-flex flex-row">
        <Footer />
      </div>
    </div>
  </HashRouter>,
  document.getElementById( 'root' ),
);

serviceWorker.unregister();
