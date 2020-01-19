import React from 'react';
import './autoroad/css/open-iconic-bootstrap.min.css';
import './autoroad/css/animate.css';

//import './autoroad/css/owl.carousel.min.css';
import './autoroad/css/owl.theme.default.min.css';
import './autoroad/css/magnific-popup.css';

import './autoroad/css/aos.css';

import './autoroad/css/ionicons.min.css';

import './autoroad/css/bootstrap-datepicker.css';
import './autoroad/css/jquery.timepicker.css';

import './autoroad/css/flaticon.css';
import './autoroad/css/icomoon.css';
import './autoroad/css/style.css';

import './App.css';

import Nav from './components/nav';
import Body from './components/body';
import About from './components/about';
import Pricing from './components/pricing';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Nav/>
      <Body/>
      <About/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
