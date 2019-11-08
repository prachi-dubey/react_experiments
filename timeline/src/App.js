import React from 'react';  
import Header from "./Components/Header/header.jsx";
import Container from "./Components/Container/container.jsx"
import './App.scss'; 
import { BrowserRouter as Router} from "react-router-dom";

export default function App () {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <Header /> 
          <Container />          
        </div> 
      </div>
    </Router>  
  );   
}  




