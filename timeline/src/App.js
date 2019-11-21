import React from 'react';  
import Header from "./Components/Header/header.jsx";
import Container from "./Components/Container/container.jsx"
import { BrowserRouter as Router} from "react-router-dom";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {  
      logout: '',
    }
    this.getLogout = this.getLogout.bind(this);
    this.updateLogout = this.updateLogout.bind(this);
  } 

  getLogout = (e) => {  
    this.setState({
      logout: e
    });  
  } 

  updateLogout = (e) => {
    console.log("hello logout"); 
    this.setState({
      logout: !e
    });
    const userDetails = JSON.parse(localStorage.getItem('PersonDetail')); 
    for (var i = 0; i < userDetails.length; i++) {
        if(userDetails[i].isLoggedIn) {
          userDetails[i].isLoggedIn = false;
        } 
      }
    localStorage.setItem('PersonDetail', JSON.stringify(userDetails)); 
  }
  
  render() {  
    return (
      <Router>
        <div className="App">
          <Header logout={this.state.logout} onLogoutUpdate={this.updateLogout}/> 
          <Container  onLogout={this.getLogout} /> 
        </div>
      </Router>  
    ); 
  }  
}   