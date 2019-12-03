import React, { useState } from 'react';  
// import Header from './Components/Header/header.jsx';
import Sidebar from './Components/Sidebar/sidebarContainer.jsx';
// import BookList from './Components/BookDetails/bookList.jsx';
import {LoginForm} from './Components/LoginForm/loginForm.jsx';
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
      tabName: 'Books',
      bookName: '',
      storeUserData: []
    };
    this.getTabName = this.getTabName.bind(this);
    this.getBookName = this.getBookName.bind(this);
    this.getUserData = this.getUserData.bind(this);
  } 

  getTabName = (e) => { 
    // console.log('i am in app nav tab ' + e);
    this.setState({
      tabName: e
    });
  } 

  getUserData = (e) => {
    var joined = this.state.storeUserData.concat(e);
    this.setState({
      storeUserData: joined
    });  
  }

  componentWillMount = () => {
    this.getBookName();
    console.log("componentWillMount ");  
  } 

  getBookName = (e) => {
    console.log('onBookName :' + e);
    
    this.setState({
      bookName: e
    });  
  }
  
  render() {  
    return (
    <Router>
      <div className="App">
        <div className="container"> 
          <nav className="navbar navbar-inverse navbar-default">
            <div className="navbar-header">
              <a className="book-api" >Bookapi</a> 
            </div>
            <div className="pull-right">
              <ul className="nav nav-tabs">
                <li><NavLink to="/Book" >Book</NavLink></li>
                <li><NavLink to="/UserField" >UserField</NavLink></li>
                <li><NavLink to="/UserTable" >UserTable</NavLink></li>
              </ul>
            </div>
          </nav>        

          {/* <Switch> */}
              <Route path="/UserField" 
                render={(props) => <LoginForm {...props} onUserData={this.getUserData }/>}   
              />
    
              <Route path="/UserTable" 
                render={(props) => <UserDetails {...props} userData={this.state.storeUserData}/>} 
              />
               
            
            <Route path="/Book">
              <div> 
                {/* <div className="col-sm-3">  */}
                  <p> hello {this.state.bookName}</p>
                  <Sidebar onBookName={this.getBookName}/>  
                   
                {/* </div> */}
                {/* <div className="col-sm-9">
                  <BookList bookNameForApi={this.state.bookName}/>
                </div> */}   
              </div> 
            </Route>
          {/* </Switch> */}
        </div>    
      </div>
    </Router>
    ); 
  }   
} 

 {/* <div className="col-sm-3"> 
                  <Sidebar onBookName={this.getBookName} Route path="/:id" children={<Child />}/>
                </div> 
                <div className="col-sm-9">
                  <BookList bookNameForApi={this.state.bookName}/>
                </div> */}

