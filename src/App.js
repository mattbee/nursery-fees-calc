import React, { Component } from 'react';
import Calculator from './Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          Dimples calculator
        </header>

        <div className="App">
          <p>
            Use this to work out nursery fees. Based on £70 per day for G and 24 funded hours per week for F.
          </p>

          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
