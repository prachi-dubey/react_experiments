import React from 'react'; 
import ClickCounter from './component/ClickCounter/ClickCounter.jsx' 
import HoverCounter from './component/HoverCounter/HoverCounter.jsx' 
import './App.scss'; 

export default class App extends React.Component { 
  render() {  
    return (
      <div className="App">
        <ClickCounter name='Raj' /> 
        <HoverCounter name='Sneha'/>
      </div>

    ); 
  }   
} 


