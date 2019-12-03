export const signupReducer = (state = {
  userData: [],
}, action) => {   
  switch (action.type) {
    case 'LOCAL_STORAGE': 
      state = {
        ...state,
        userData: [...state.userData, action.payload] 
      }
      return state ;
 
    case 'STORE_DATA': 
      state = {
        ...state,
        userData: [...state.userData, action.payload] 
      }
      return state;
      
    default:
      return state;
  }
}