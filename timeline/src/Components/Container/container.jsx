import React from 'react';  
import {Login} from './Login/login.jsx';
import {Signup} from './Signup/signup.jsx';
import SimpleContainer from './Dashboard/dashboard.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";


class Container extends React.Component {
  constructor() {
    super();
    this.state = {  
      tabName: '',
      storeUserData: [],
      loggedIn: ''
    };
    this.getLoginData = this.getLoginData.bind(this);
  } 

  getLoginData = (e) => { 
  
    console.log(e.email);
    console.log(e.password);

    const test = JSON.parse(localStorage.getItem('PersonDetail')); 
    console.log(test);
    for (var i = 0; i < test.length; i++) {
      if (test[i].email ===  e.email && test[i].password === e.password ) {
        console.log(" app yes i am present");
        this.props.history.push("/dashboard");
      }
    }
  } 
  
  render() { 
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/login" render={(props) => <Login {...props} onLoginData={this.getLoginData}/>}       
          />
          <Route exact path="/signup" component={Signup}/> 
          <Route exact path="/dashboard" component={SimpleContainer}/> 
          <Redirect exact from="/" to="/login"/> 
        </Switch>
      </React.Fragment> 
    ); 
  }   
}  

export default withRouter(Container);


