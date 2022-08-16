import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

import ReactThrottle from './R095_reactThrottle';
import FloatingPopulationList from './Floating_population/floatingPopulationList';
import RechartsSimpleLineChart from './Floating_population/rechartsSimpleLineChart';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Routes>
          <Route path='/' element = {<LoginForm />} />
          <Route path='/Throttle' element = {<ReactThrottle />} />
          <Route path='/floatPopulationList' element = {<FloatingPopulationList />} />
          <Route path='/rechartsSimpleLineChart' element ={<RechartsSimpleLineChart />} />
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;