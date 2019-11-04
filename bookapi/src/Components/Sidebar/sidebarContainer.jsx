import React, { useState } from 'react';
import './sidebar.scss'; 
import BookList from '../BookDetails/bookList.jsx';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom"; 

const Sidebar = (props) => {
  let tabs =  ['java', 'oracle', 'php', 'mysql','css'];
  let { path, url } = useRouteMatch();
  console.log("path : " + path);
  console.log("url : " + url);
    
  return (
    <div>
      <div className="col-sm-3">
        <div className="side-nav"> 
          <ul className="left">  
            {tabs.map((item, index) => (
              <Link to={`${url}/${item}`}>
                <li className='data' key={index} onClick={() => props.onBookName(item)}>{item}</li>
              </Link>
            ))} 
          </ul> 
        </div> 
      </div>
    
      <Switch>
        <Route path={`${url}/:bookName`} component={SubjectName}/>
      </Switch>
    </div>   
  );
}

export default Sidebar;

const SubjectName = () =>  {  
  let { path, url } = useRouteMatch();
  // console.log("test path" + path);
  // console.log("test url " + url);
  let temp = url.slice(6); 
  console.log(temp);  
  return (
    <div className="col-sm-9">
      <BookList bookNameForApi={temp ? temp : 'java'}/>
    </div> 
  );
}



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


