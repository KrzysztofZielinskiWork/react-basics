import React, { Component } from 'react';
import AppNav from './components/app-nav-view';

import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
        <div>
          <h1>Hello World </h1>
        </div>
      </div>
    );
  }
}

export default App;
