import React from 'react';
import './sidebar.scss';
 
class Sidebar extends React.Component {
    render() { 
      return (
               <div className="sidebar">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
              </div>
      );
    }   
  } 

export default Sidebar;