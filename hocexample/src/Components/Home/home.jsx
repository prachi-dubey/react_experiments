import React from 'react';
import './home.scss'; 
import {
  BrowserRouter as Router,
  useParams,
  Link,
  NavLink,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";

const Home = () => {
  let { path, url } = useRouteMatch();
  console.log("url :" + url);

  return (
    <Router>
      <div className="home">
        <h2>Home</h2>
        <ul>
          <li><Link to={`${url}/react1`}>React 1</Link></li>
          <li><Link to={`${url}/react2`}>React 2</Link></li>
          <li><Link to={`${url}/react3`}>React 3</Link></li>
        </ul>

        <Switch>
          <Route path={`${url}/:testHome`} component={Topic}/>
        </Switch>
      </div>
    </Router>   
  );  
}

export default Home;

const Topic = () =>  {
  
  let { testHome } = useParams();
  console.log("test Home" + testHome);
  let { path, url } = useRouteMatch();
  console.log("test path" + path);
  console.log("test url" + url);

  let action;
  if( testHome === 'react1') {
    action = <Home1/>
  } else  if( testHome === 'react2') {
    action = <Home2/>
  }  else  if( testHome === 'react3') {
    action = <Home3/>
  }
  return (
    <div>
      <h3>{testHome}</h3>
      {action}
    </div>
  );
}



const Home1 = () =>  {
  return (
    <div>
      <h1> Example for Home1 <span className="badge badge-secondary">Home1</span></h1>
    </div>
  );
}

const Home2 = () =>  {
  return (
    <div>
      <h1> Example for Home2 <span className="badge badge-secondary">Home2</span></h1>
    </div>
  );
}

const Home3 = () =>  {
  return (
    <div>
      <h1> Example for Home3 <span className="badge badge-secondary">Home3</span></h1>
    </div>
  );
}

