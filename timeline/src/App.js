import React, { useState } from 'react';  
import AppBar from '@material-ui/core/AppBar';
import {Login} from './Components/Login/login.jsx';
import {Signup} from './Components/Signup/signup.jsx';
import './App.scss'; 
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {  
      tabName: '',
      data:''
    };
    this.getTabName = this.getTabName.bind(this);
    this.getUserData = this.getUserData.bind(this);
  } 

  getTabName = (e) => { 
    console.log('i am in app nav tab ' + e);
    this.setState({
      tabName: e
    });
  } 

  getUserData = (e) => { 
    console.log('i am in user data ' + e.firstname);
    this.setState({
      data: e
    });
    const userData = localStorage.getItem('UserData');
    console.log("test webstorage" + userData);
    console.log("check" + userData.firstname); 
    
    const dataCheck = JSON.parse(localStorage.getItem('PersonDetail'));
    console.log("parse webstorage" + dataCheck);
    // console.log(" parse check" + dataCheck.firstname); 
    
  } 
  
  render() {  
    return (
      <Router>
        <div className="App">
          <div className="container-fluid">
            <AppBar color="primary" position="static">
              <div className="logo"></div>
            </AppBar> 
            <NavLink to="/login"> login</NavLink>

            <Route path="/login" 
              render={(props) => <Login {...props} onTabName={this.getTabName }/>}       
            /> 

            <Route path="/signup" 
              render={(props) => <Signup {...props} onUserData={this.getUserData }/>}    
            /> 

            {/* <Route path="/signup"  component={Signup}/>  */}
            {/* <Signup /> */}


          </div> 
        </div>
      </Router>  
    ); 
  }   
} 




