export function storeLocalstorageData(payload) {
  return {
    type: 'LOCAL_STORAGE',
    payload: payload
  }  
}

export function storeUserData(payload) {
  return {
     type: 'STORE_DATA',
     payload: payload
  }
} 

export function setLoggedUser(payload) {
   return {
     type: 'SET_LOGGEDIN_USER',
     payload: payload
  }
} 

export function unSetLoggedUser(payload) {
  return {
     type: 'UNSET_LOGGEDIN_USER',
     payload: payload
  }
} 

export function getLoggedInUser() {
  return {
     type: 'GET_LOGGEDIN_USER',
    //  payload: payload
  }
} 

export function setPostData(payload) {
  return {
     type: 'SET_POST_DATA',
     payload: payload
  }
} 