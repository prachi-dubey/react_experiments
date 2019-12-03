import React from 'react';  
import { UserProvider } from './Components/UserContext.jsx'
import LoginForm from './Components/LoginForm/loginForm.jsx';
import UserDetails from './Components/Userdetail/UserTable.jsx';
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
      storeUserData: "",
      name:'raj'
    };
    this.getUserData = this.getUserData.bind(this);
  } 

  getUserData = (e) => {
    // var joined = this.state.storeUserData.concat(e);
    this.setState({
      storeUserData: e
    });  
  }

  // updateValue(e) {
  //   console.log("hii");
  //   this.setState({
  //     userData: e
  //   }); 
  // }

  render() {  
    return (
    <Router>
      <div className="App">
        <div className="container"> 
          <nav className="navbar navbar-inverse navbar-default">
            <div className="pull-right">
              <ul className="nav nav-tabs">
                <li><NavLink to="/UserField" >UserField</NavLink></li>
                <li><NavLink to="/UserTable" >UserTable</NavLink></li>
              </ul>
            </div>
          </nav>  

          <UserProvider  value={{userData: this.state.storeUserData}} >
            <Route path="/UserField" 
              render={(props) => <LoginForm {...props} onUserData={this.getUserData }
              />}   
            />
            <Route path="/UserTable" 
            render={() => <UserDetails // {...props} userData={this.state.storeUserData}
            />} 
          />
          </UserProvider>     
              
        </div>    
      </div>
    </Router>
    ); 
  }   
} 