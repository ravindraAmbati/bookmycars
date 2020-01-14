import React from 'react';
// import logo from './images/logo.svg';
import carTransport from './images/carTransport.svg';
import raynTours from './images/raynTours.png';
import comingsoon from './images/comingsoon.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={carTransport} className="App-logo" alt="carTransport" />
        <p>
        For car rentals BookMyCars.in &nbsp;&nbsp; <img src={comingsoon} alt="comingsoon" /> 
        </p>
        <p> For Inbound and Outbound tours and travels - click &nbsp;&nbsp;   
        <a
          className="App-link"
          href="https://rayntourism.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={raynTours} alt="raynTours" />
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
