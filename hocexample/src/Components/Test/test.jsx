import React from 'react';
import './test.scss'; 
import {
  BrowserRouter as Router,
  useRouteMatch
} from "react-router-dom";

export default Test;

function Test() {
  let { path, url } = useRouteMatch();
  console.log("path" + path);
  console.log("url" + url);

  return (
    <div className="test">
      <h2>Test</h2>
    </div>
  );
}

