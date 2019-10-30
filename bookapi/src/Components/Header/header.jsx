import React from 'react';
import './header.scss'; 

export default class Header extends React.Component { 
  constructor(props) {
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
  } 

  handleNavClick = (e) => { 
    this.props.onNavData(e);
  } 
  
  render() { 
    return (
      <NavBookapi OnNavTab={this.handleNavClick}/>  
    );
  }         
}

///////// presentational function //////////////
const NavBookapi = props => (
  <nav className="navbar navbar-inverse navbar-default">
    <div className="navbar-header">
      <a className="book-api" >Bookapi</a> 
    </div>
    <div className="pull-right">
        <ul className="nav nav-tabs">
          <li onClick={() => props.OnNavTab('Books')}>Books</li>
          <li onClick={() => props.OnNavTab('UserFiled')}>UserFiled</li>
          <li onClick={() => props.OnNavTab('UserTable')}>UserTable</li>
        </ul>
      </div>
  </nav>
)
