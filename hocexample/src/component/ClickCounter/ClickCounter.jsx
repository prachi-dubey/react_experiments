import React from 'react'; 
import withcounter from '../withCounter.jsx'

class ClickCounter extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {  
    const { count, incrementCount } = this.props;
    const {test} = this.state;
    
    return (
      <div className="App">
        <button onClick={incrementCount}> 
          {this.props.name} Click {count} times 
        </button> 
      </div>
    ); 
  }   
}

export default withcounter(ClickCounter,2);