import React,{ Component } from "react";
import {Routes,Route} from 'react-router-dom';
import ReactRouter from './R089_ReactRouter';
import ReactRouter2 from './R089_ReactRouter2';
import LoginForm from './LoginForm';
import Debounce from './R094_ReactDebounce';
import Trottle from './R095_ReactThrottle';

// Header
import Headeradmin from './Header/Header admin';
// Footer
import Footer from './Footer/Footer'
//CSS
import '../css/new.css'

class App extends Component {

  render() {
    return (
      <div className = 'App'>
        <Headeradmin/>
        <Routes>
          <Route path = '/' element = {<LoginForm/>} />
          <Route path = 'Debounce' element = {<Debounce/>}/>
          <Route path = 'Trottle' element = {<Trottle/>}/>
          <Route path = 'reactRouter' element = {<ReactRouter/>} />
          <Route path = 'reactRouter2' element = {<ReactRouter2/>} />
        </Routes>
        <Footer/>
      </div>
    )
  }

}

export default App;