import React from 'react';
import BookList from './sidebar.jsx'; 

export default class Sidebar extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      tabs: ['Java', 'Oracle', 'Php', 'Mysql','Css'],
    };

    this.handleClick = this.handleClick.bind(this);
  } 
  
  handleClick = (e) => { 
    this.props.onBookName(e);
  }

  render() { 
    return (
      <BookList onSidebar={this.handleClick}  tabs={this.state.tabs} />  
    );
  }         
}