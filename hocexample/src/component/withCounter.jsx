import React from 'react'

const withcounter = (WrappedComponent, check) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0,
        temp:''
      }
      this.incrementCount = this.incrementCount.bind(this);
    }
  
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 } 
      })
    }

    render() {  
      console.log(check);
      
      return <WrappedComponent 
        count={this.state.count}
        incrementCount={this.incrementCount}
        {... this.props}
      />
    } 
  }  
  return WithCounter  
} 

export default withcounter