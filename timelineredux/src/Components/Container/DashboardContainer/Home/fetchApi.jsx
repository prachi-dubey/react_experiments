import axios from 'axios';
import postImage from "../../../../assets/Viator_Shutterstock.jpg";
import helpers from '../../../../Redux/helper';

export default axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`
});

var commentsData = [];

export function getPostApiData(response) {
  axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => {
    commentsData = res.data;
  })

  var postsData = null;
  var today = new Date();
  var responseData = response.splice(0, 5);
  var postResponse = responseData.map(function(el) {
    var o = Object.assign({}, el);
    o.time =  today.getTime();
    o.name = 'public';
    o.url = postImage;
    o.state = false;
    o.comments = [];
    return o;
  })
  var checkPost = helpers.getData('Posts');
  if(!checkPost) {
    checkPost = [];
  }
  postsData = checkPost.concat(postResponse); 
  return postsData; 
} 

export function getCommentsApiData(postsCount) {
  var responseData = [];
  for (var i = 0; i < commentsData.length; i++) {
    if(postsCount < 4 ) {
      if(commentsData[i].postId === postsCount) {
        responseData.push(commentsData[i]);
        responseData.push(commentsData[i+1]); 
        break;
      }
    }  
  }
  return responseData
}