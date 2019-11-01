import React from 'react';
import './about.scss'; 
import {
  BrowserRouter as Router,
  useRouteMatch
} from "react-router-dom";


export default About;

function About() {
  let { path, url } = useRouteMatch();
  console.log("path" + path);
  console.log("url" + url);

  return (
    <div className="about">
      <h2>About</h2>
    </div>
  );
}

