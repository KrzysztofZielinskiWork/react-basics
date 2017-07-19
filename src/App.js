import React, { Component } from 'react';
import AppNav from './components/app-nav-view';

import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
      </div>
    );
  }
}

export default App;
