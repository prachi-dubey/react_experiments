import React from 'react';
import './header.scss'; 

export default class Header extends React.Component {  
  render() { 
    return (
      <NavBookapi/>  
    );
  }         
}

///////// presentational function //////////////
const NavBookapi = props => (
  <nav className="navbar navbar-inverse navbar-default">
    <div className="navbar-header">
      <a className="book-api" >Bookapi</a>
    </div>
  </nav>
)
