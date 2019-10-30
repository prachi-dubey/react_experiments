import React from 'react';
import './sidebar.scss'; 
// import BookList from './sidebar.jsx'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";

export default class Sidebar extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      tabs: ['Java', 'Oracle', 'Php', 'Mysql','Css'],
      tabClickName: ''
    };
  } 
  
  render() { 
    return (
      <div className="side-nav">  
        <ul className="left">   
          <Link to={`${'/Book'}/Java`}><li className='data' onClick={() => this.props.onBookName('java')} >Java</li></Link>
          <Link to={`${'/Book'}/Oracle`}><li className='data' onClick={() => this.props.onBookName('oracle')}>Oracle</li></Link>
          <Link to={`${'/Book'}/Php`}><li className='data' onClick={() => this.props.onBookName('php')}>Php</li></Link>
          <Link to={`${'/Book'}/Mysql`}><li className='data' onClick={() => this.props.onBookName('mysql')}>Mysql</li></Link>
          <Link to={`${'/Book'}/Css`}><li className='data' onClick={() => this.props.onBookName('css')}>Css</li></Link>
        </ul>    
      </div>
    );
  }         
}


