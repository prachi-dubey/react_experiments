import React from 'react';  
import './dashboard.scss'; 
import WebPage from '../Webpage/webpage'
import { Route, Switch} from "react-router-dom";

class Dashboard extends React.Component { 
  render() {
    return (
      <React.Fragment> 
        <Switch> 
          <Route path="/dashboard" component={WebPage}/> 
        </Switch>
      </React.Fragment> 
    ); 
  }   
}  

export default Dashboard; 