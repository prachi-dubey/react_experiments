import React from 'react';  
import {Login} from './Login/login.jsx';
import {Signup} from './Signup/signup.jsx';
import Dashboard from './Dashboard/dashboard.jsx';
import { BrowserRouter as Router, Route, Switch, Redirect,withRouter} from "react-router-dom";

class Container extends React.Component {
  constructor() {
    super();
    this.getLoginData = this.getLoginData.bind(this);
  } 

  getLoginData = (e) => { 
    console.log(e.email);
    console.log(e.password);
    const userDetails = JSON.parse(localStorage.getItem('PersonDetail')); 
    console.log(userDetails);
    for (var i = 0; i < userDetails.length; i++) {
      if (userDetails[i].email ===  e.email && userDetails[i].password === e.password ) {
        userDetails[i].isLoggedIn = true;
        console.log(" app yes i am present");
        this.props.history.push("/dashboard");
      }
    }
    localStorage.setItem('PersonDetail', JSON.stringify(userDetails)); 
  } 
  
  render() {
    console.log("comming in container");
     
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/login" 
          render={(props) => <Login {...props} onLoginData={this.getLoginData}/>
          } />
          <Route exact path="/signup" component={Signup}/>        
          <Route path="/dashboard" component={Dashboard}/> 
          <Redirect exact from="/" to="/login"/> 
        </Switch>
      </React.Fragment>          
    ); 
  }   
}  

export default withRouter(Container);


