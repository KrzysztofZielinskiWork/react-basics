import React, { Component } from 'react';
import AppNav from './components/app-nav-view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
        <h1>Hello World </h1>
      </div>
    );
  }
}

export default App;
