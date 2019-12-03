import React  from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
// import reducer from './Component/reducer.js'
import Counter from './Component/CounterContainer.jsx'

const reducer = (state = 5, action) => {
  // console.log(action); 
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    case 'RESET' : return 0 
    default: return state
  }
}

const store = createStore(reducer, applyMiddleware(logger));

export default class App extends React.Component {  
   render() {
    // console.log(store);
      return (
         <div className = "App">
          <Provider store={store}>
            <Counter/>
          </Provider>
         </div>
      );
   }
}  

