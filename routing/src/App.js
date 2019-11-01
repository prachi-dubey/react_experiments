import React from 'react';  
import Home from './Components/Home/home.jsx';
import About from './Components/About/about.jsx';
import Test from './Components/Test/test.jsx';
import './App.scss'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

export default class App extends React.Component { 
  render() {  
    return (
    <Router>
      <div className="App">
        <div className="container">
          <ul className="nav">
            <li className="btn btn-light tabActive"><NavLink to="/home" activeStyle={{color:'green'}}>Home </NavLink></li>
            <li className="btn btn-light tabActive"><NavLink to="/about" activeStyle={{color:'green'}} >About </NavLink></li>
            <li className="btn btn-light tabActive"><NavLink to="/test" activeStyle={{color:'green'}}> Test</NavLink></li>
          </ul> 

          <Route path="/home"  component={Home}/>
          <Route path="/about"  component={About}/>
          <Route path="/test"  component={Test}/>         
        </div>    
      </div>
    </Router>
    ); 
  }   
} 


