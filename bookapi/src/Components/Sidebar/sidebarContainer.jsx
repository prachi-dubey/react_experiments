import React, { useState } from 'react';
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

const Sidebar = (props) => {
  let { path, url } = useRouteMatch();
  // console.log("path : " + path);
  // console.log("url : " + url);
  
  return (
    <div className="side-nav"> 
      <ul className="left">   
        <Link to={`${url}/Java`}><li className='data' onClick={() => props.onBookName('java')}  >Java</li></Link>
        <Link to={`${url}/Oracle`}><li className='data' onClick={() => props.onBookName('oracle')} >Oracle</li></Link>
        <Link to={`${url}/Php`}><li className='data' onClick={() => props.onBookName('php')} >Php</li></Link>
        <Link to={`${url}/Mysql`}><li className='data' onClick={() => props.onBookName('mysql')} >mysql</li></Link>
        <Link to={`${url}/Css`}><li className='data' onClick={() => props.onBookName('css')} >Css</li></Link>
      </ul>    
    </div>
  );
}

export default Sidebar;

////////////////////////////////////// with class and state /////////////////////////////////
// export default class Sidebar extends React.Component {
  
//   constructor(props) {
//     super(props);

//     this.state = {
//       tabs: ['Java', 'Oracle', 'Php', 'Mysql','Css'],
//       tabClickName: ''
//     };
//   } 
  
//   render() { 
//     // let match = useRouteMatch();
//     // console.log("match "+ match);
//     // let history = useHistory();
    
//     return (
//       <div className="side-nav">  
//         <ul className="left">   
//           <Link to={`${'/Book'}/Java`}><li className='data' onClick={() => this.props.onBookName('java')} >Java</li></Link>
//           <Link to={`${'/Book'}/Oracle`}><li className='data' onClick={() => this.props.onBookName('oracle')}>Oracle</li></Link>
//           <Link to={`${'/Book'}/Php`}><li className='data' onClick={() => this.props.onBookName('php')}>Php</li></Link>
//           <Link to={`${'/Book'}/Mysql`}><li className='data' onClick={() => this.props.onBookName('mysql')}>Mysql</li></Link>
//           <Link to={`${'/Book'}/Css`}><li className='data' onClick={() => this.props.onBookName('css')}>Css</li></Link>
//         </ul>    
//       </div>
//     );
//   }         
// }


