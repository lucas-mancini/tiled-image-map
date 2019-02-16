import React, { Component } from 'react';
import MapView from './MapView.jsx';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header-text">
            2D tiled image map
          </h1>
        </header>
        <main className='App-main'>
          <MapView />
        </main>
      </div>
    );
  }
}

export default App;
