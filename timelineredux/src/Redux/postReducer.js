
export const postReducer = (state = {
  postData: []
}, action) => {  
  switch (action.type) {
    case 'SET_POST_DATA':
      return {  ...state,
        postData: action.payload
      }    
    default:
      return state;
  }
}