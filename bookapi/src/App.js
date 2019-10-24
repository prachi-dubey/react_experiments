import React from 'react';
import Header from './Components/Header/header.jsx';
import Sidebar from './Components/Sidebar/sidebarContainer.jsx';
import BookList from './Components/BookDetails/bookList.jsx';
import {LoginForm} from './Components/LoginForm/loginForm.jsx';
import UserDetails from './Components/Userdetail/UserTable.jsx';
import './App.scss'; 

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
    this.setState({
      bookName: e
    });  
  }
  
  render() { 
    let tab;
    if (this.state.tabName === 'UserFiled') {
      tab = <div className="col-md-6 col-md-offset-3">
              <LoginForm onUserData={this.getUserData }/>
            </div>;
    } else if (this.state.tabName === 'UserTable') {
      tab = <UserDetails userData={this.state.storeUserData}/>
    } else if(this.state.tabName === 'Books') { 
      tab = <div> <div className="col-sm-3"> 
              <Sidebar onBookName={this.getBookName}/> 
            </div>
            <div className="col-sm-9"> 
              <BookList bookNameForApi={this.state.bookName}/> 
            </div></div> ;
    }

    return (
      <div className="App">
        <div className="container">
          <Header onNavData={this.getTabName}/>
          <div className="row bookapi"> 
            {tab}
          </div>
        </div>
      </div>
    ); 
  }   
}  

            






