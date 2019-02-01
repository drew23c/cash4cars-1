import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import towtruck from './components/pics/towtruck.jpg';
import cash from './components/pics/cash.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><strong className="cash">CA$H</strong> FOR JUNK CARS, VAN & TRUCKS</h1>
        <div className="towtruck-image">
          <img src={towtruck} style={{width:'60%', height:'60%'}} />
        </div>
        <div className="contact">
          <h2>Call Tony</h2>
          <h3>917-862-5466</h3>
        </div>
        <div className="features">
          <h2>Services Included:</h2>
          <ul>
            <li><h2>Snow Removal</h2></li>
            <li><h2>Lost Papers, No problem</h2></li>
          </ul>
        </div>
          <div className="cash-image">
            <img src={cash} style={{width:'30%', height:'30%'}} />
          </div>
      </div>
    );
  }
}

export default App;
