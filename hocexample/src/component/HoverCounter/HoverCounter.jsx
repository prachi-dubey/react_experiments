import React from 'react';
import withcounter from '../withCounter.jsx' 

class HoverCounter extends React.Component {
  render() {  
    const { count, incrementCount } = this.props
    return (
      <div className="App">
        <h2 onMouseOver={incrementCount}> 
          {this.props.name} hover {count} times
        </h2 > 
      </div>
    ); 
  }   
}

export default withcounter(HoverCounter);