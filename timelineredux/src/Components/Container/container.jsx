import React from 'react';  
import Login from './Login/login.jsx';
import Signup from './Signup/signup.jsx';
import Dashboard from './DashboardContainer/Dashboard/dashboard.jsx';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { getLoggedInUser } from '../../Redux/action'
import { connect } from 'react-redux';

class Container extends React.Component {
  componentDidMount() {
    this.props.getLoggedInUser();    
  }

  componentDidUpdate() {
    if(this.props.loginData.loggedInUser.isLoggedIn && (this.props.location.pathname === '/login'))  {
      this.props.history.push("/dashboard/home"); 
    } 
  } 

  render() { 
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>        
          <Route path="/dashboard" component={Dashboard} /> 
          <Redirect from='*' to='/login' />        
        </Switch>
      </React.Fragment>          
    ); 
  }   
}  

const mapStateToProps = (state) => {  
  return {
    loginData : state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLoggedInUser: () => dispatch(getLoggedInUser()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));