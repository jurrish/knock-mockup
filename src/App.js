import React, { Component } from 'react';
import Home from '../src/Pages/Home/Home.js';

import '../src/Pages/Home/Home.scss'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
