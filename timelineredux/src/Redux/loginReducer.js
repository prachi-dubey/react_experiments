import helpers from './helper'

export const loginReducer = (state = {
  loggedInUser: {}
}, action) => {  
  switch (action.type) {
    case 'SET_LOGGEDIN_USER':
      return {  ...state,
        loggedInUser: action.payload
      }

    case 'UNSET_LOGGEDIN_USER':
      return {  
        ...state,
        loggedInUser: action.payload
      }
    
    case 'GET_LOGGEDIN_USER':
      var temp = helpers.getLoggedinUser();
      return {  ...state,
        loggedInUser: temp
      }
      
    default:
      return state;
  }
}