import React from 'react';  
import Header from "./Components/Header/header.jsx";
import Container from "./Components/Container/container.jsx"
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore ,combineReducers} from 'redux';
import {signupReducer} from "./Redux/signupReducer"
import {loginReducer} from "./Redux/loginReducer"
import {postReducer} from "./Redux/postReducer"
import logger from 'redux-logger'

const rootReducer = combineReducers({ 
  signup: signupReducer,
  login: loginReducer,
  posts: postReducer
})

// const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(rootReducer, applyMiddleware());

export default class App extends React.Component { 
  render() { 
    return (
      <Router>
         <Provider store={store}>
          <div className="App">
            <Header />
            <Container />   
          </div>
         </Provider>  
      </Router>  
    ); 
  }  
}  
