import React, { Component } from 'react';
import logo from './wolf.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={wolf} className="App-wolf" alt="wolf" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p className="red">
        loremgduuzedgzygchvevcuyfgouzvctvcuy
        </p>
        <br><br/>
        <hr><hr/>
        <p className="blue">
        hfcbujhvcuqybscjyvshgvvloremgduuzedgzygchvevcuyfgouzvctvcuy
        </p>
      </div>
    );
  }
}

export default App;
