import React from 'react';

class Counter extends React.Component {
   render() {
      const {counter,increment,decrement,reset} = this.props;
      // console.log(this.props);
      
      return (
         <div className = "App">
            <div>{counter}</div>
            <div>
               <button onClick = {increment}>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement}>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset}>RESET</button>
         </div>
      );
   }
}
export default Counter;