import React from 'react';  
import {Login} from './Login/login.jsx';
import {Signup} from './Signup/signup.jsx';
import Dashboard from './Dashboard/dashboard.jsx';
import { Route, Switch, Redirect,withRouter} from "react-router-dom";

class Container extends React.Component {
  constructor() {
    super()
    this.getLoginData = this.getLoginData.bind(this);
  } 

  getLoginData = (e) => { 
    console.log(e.email);
    console.log(e.password);
    const userDetails = JSON.parse(localStorage.getItem('PersonDetail')); 
    for (var i = 0; i < userDetails.length; i++) {
      if (userDetails[i].email ===  e.email && userDetails[i].password === e.password ) {
        console.log(userDetails[i].isLoggedIn);
        if(!userDetails[i].isLoggedIn) {
          userDetails[i].isLoggedIn = true;
          this.props.history.push("/dashboard"); 
          this.props.onLogout(userDetails[i].isLoggedIn);     
        } 
      }
    } 
    localStorage.setItem('PersonDetail', JSON.stringify(userDetails)); 
  }  

  componentDidMount = () => { 
    const userDetails = JSON.parse(localStorage.getItem('PersonDetail'));
    for (var i = 0; i < userDetails.length; i++) {
      console.log("hii i am conatiner " + userDetails[i].isLoggedIn);
      if (userDetails[i].isLoggedIn ) { 
        this.props.onLogout(userDetails[i].isLoggedIn); 
      }
    } 
  } 

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Redirect exact from="/" to="/login"/> 
          <Route path="/login"
            render={(props) => <Login {...props} onLoginData={this.getLoginData}/>}
          />
          <Route exact path="/signup" component={Signup}/>        
          <Route path="/dashboard" component={Dashboard} /> 
          
        </Switch>
      </React.Fragment>          
    ); 
  }   
}  

export default withRouter(Container); 





