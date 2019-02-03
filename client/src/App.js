import React, { Component } from 'react';
import logo from './components/pics/favicon.ico';
import './App.css';
import towtruck from './components/pics/towtruck.jpg';
import towtruckIcon from './components/pics/towtruckIcon.jpg';
import cash from './components/pics/cash.png';
import phoneIcon from './components/pics/phone.png';
import phone from './components/pics/baseline-phone-24px.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="towtruck-image">
          <h1>TA Trucking</h1>
          <strong className="heading-call">Call 24/7 (917) 862-5466</strong>
          <img src={towtruck} />
        </div>
        <div className="heading">
          <h2><strong className="cash">CA$H</strong> FOR JUNK CARS, VANS & TRUCKS</h2>
        </div>
        <div className="features">
              <h2>Service Include:</h2>
              <ul>
                <li><h2>Snow Removal</h2></li>
              </ul>
            </div>
            <div className="contact">
              <h2>Call Tony</h2>
              <h3>917-862-5466</h3>
            </div>
          <div className="information">
            <h2>We buy junk cars, vans, trucks, SUVs, forklifts in all 5 boroughs</h2>
            <h3>Want to Junk your car, van truck SUV, forklift?</h3>
            <div>
              <ul>
                <li><a href="tel:9178625466"><img className="cash-image" src={phoneIcon} style={{height:'15%', width:'15%'}} /></a></li>
                <li><p>Get a fast offer 24/7</p></li>
                <li><img className="cash-image" src={towtruckIcon} style={{height:'15%', width:'15%'}} /></li>
                <li><p>Get a <b>FREE</b> tow. Absolutely <b>FREE</b> pickup included.</p></li>
                <li><img className="cash-image" src={cash} style={{height:'15%', width:'15%'}} /></li>
                <li><p>Get paid immediately you get payment on the spot!</p></li>
              </ul>
              <h3>Have any questions? <strong className="call">Call 24/7 (917) 862-5466</strong></h3>
            </div>
            <div className="We-buy">
              <p>{`We buy junk cars for cash in the entire New York area. 
                Sell your used or unwanted cars, trucks, SUVs, or vans and 
                get paid on the spot. We don't just buy junk vehicles! We buy 
                ANY condition vehicle with or without a tile or keys.`}</p>
              <p>Lost keys, no problem.</p>
            </div>
          </div>
          <div className="footer">
            <ul className="footer-list">
              <li>TA Trucking</li>
              <li>Click to call <a href="tel:9178625466"><img src={phone} style={{filter:'invert(100%)'}} /></a></li>
            </ul>
          </div>
      </div>
    );
  }
}

export default App;
