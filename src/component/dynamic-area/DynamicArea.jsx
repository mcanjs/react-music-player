
import React, { Component } from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';

// My Import Files
import SearchArea from './modules/SearchArea';
import Explore from '../../pages/explore/Explore';
import YourBest from '../../pages/your-best/YourBest';

export default class Sidebar extends Component {
  render () {
    return (
      <div className="main-corner dynamic offset-md-4 col-md-8">
        <SearchArea />
        <HashRouter>
          <div>
            <Route exact path="/kesfet" component={Explore} />
            <Route path="/enlerin" component={YourBest} />
          </div>
        </HashRouter>
      </div>
    );
  }
}
