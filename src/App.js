import React, { Component } from 'react';
import './App.css';
import { DistanceCalculator } from './DistanceCalculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DistanceCalculator />
      </div>
    );
  }
}

export default App;
