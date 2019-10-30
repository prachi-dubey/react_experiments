import React from 'react';
// import Header from './Components/Header/header.jsx';
import Sidebar from './Components/Sidebar/sidebarContainer.jsx';
import BookList from './Components/BookDetails/bookList.jsx';
import {LoginForm} from './Components/LoginForm/loginForm.jsx';
import UserDetails from './Components/Userdetail/UserTable.jsx';
import './App.scss'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams,
  useHistory
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
                <li><NavLink to="/Book/" >Book</NavLink></li>
                <li><NavLink to="/UserFiled" >UserFiled</NavLink></li>
                <li><NavLink to="/UserTable" >UserTable</NavLink></li>
              </ul>
            </div>
          </nav>
          

          <Switch>
            <Route path="/UserFiled">
             <div className="col-md-6 col-md-offset-3"> 
               <LoginForm onUserData={this.getUserData }/>    
             </div>
            </Route>
            <Route path="/UserTable">
              <UserDetails userData={this.state.storeUserData}/>
            </Route>   
            <Route path="/Book/">
              <div> 
                <div className="col-sm-3"> 
                  <Sidebar onBookName={this.getBookName} />
                  <Route path="/:id" children={<Child />}/>
                </div>
                <div className="col-sm-9">
                  <BookList bookNameForApi={this.state.bookName}/>
                </div>

                {/* <div className="col-sm-3"> 
                  <Sidebar onBookName={this.getBookName} Route path="/:id" children={<Child />}/>
                </div> 
                <div className="col-sm-9">
                  <BookList bookNameForApi={this.state.bookName}/>
                </div> */}
              </div>
            </Route>
          </Switch>

        </div>    
      </div>
    </Router>
    ); 
  }   
} 

function Child() {
  
  let { id } = useParams();
  let { path, url } = useRouteMatch();
  console.log("path : " + path);
  console.log("url : " + url);
  
  return (
    <div>
      <h3>ID: {id}</h3>    
    </div>  
  );
}

