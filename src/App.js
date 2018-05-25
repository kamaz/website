import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gist from 'react-render-gist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Gist gist="714bd2b717b464b130df9093f877a069" />
        </p>
      </div>
    );
  }
}

export default App;
