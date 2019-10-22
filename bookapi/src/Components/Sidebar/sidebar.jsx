import React from 'react';
import './sidebar.scss'; 

const BookList = props => (
  <div className="side-nav">
    <ul className="left">
      {props.tabs.map((item, index) => (
      <li className='data' key={index} onClick={() => props.onSidebar(item)}>{item}</li>
      ))}
    </ul>    
  </div>
)

export default BookList;

