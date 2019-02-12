import React, { Component } from 'react';
import './App.css';
import TowTruckImage from './components/TowTruckImage/TowTruckImage';
import Heading from './components/Heading/Heading';
import Features from './components/Features/Features';
import Contact from './components/Contact/Contact';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TowTruckImage/>
        <Heading/>
        <Features/>
        <Contact/>
        <Information/>
        <Footer/>
      </div>
    );
  }
}

export default App;
