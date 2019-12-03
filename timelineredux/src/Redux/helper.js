const helpers = {
  setData: function(param, key){
    localStorage.setItem(key, JSON.stringify(param));
  },

  getData: function(key){
    const userDetails = JSON.parse(localStorage.getItem(key));
    return userDetails
  },

  setLoggedinUser: function(param1){
    const userDetails = JSON.parse(localStorage.getItem('PersonDetail'));
    for (var i = 0; i < userDetails.length; i++) {
      if (userDetails[i].email ===  param1.email && userDetails[i].password === param1.password ) {
        userDetails[i].isLoggedIn = param1.isLoggedIn;
      }
    }
    localStorage.setItem('PersonDetail', JSON.stringify(userDetails));
  },

  getLoggedinUser: function(){
    const userDetails = JSON.parse(localStorage.getItem('PersonDetail'));
    if(userDetails) {
      var loggedinUser = {};
      for (var i = 0; i < userDetails.length; i++) {
        if(userDetails[i].isLoggedIn === true) {
          loggedinUser =  userDetails[i];
        } 
      }
      return loggedinUser
    } 
  },
}

export default helpers;