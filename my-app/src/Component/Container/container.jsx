import React from 'react';
import './container.scss';

class Container extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tabs: []
    };
  }

  render() { 
    return (
      <div className="content">
        <div className="container"> 
          <h4>{this.props.tabs}</h4>
          <h2>With a Container</h2>
          <p>The w3-container class is one of the most important W3.CSS classes.</p>
          <p>It provides correct margins, padding, alignments, and more, to most HTML elements.</p>
        </div>
     </div>  
    );
  }   
} 
      
export default Container;