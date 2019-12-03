import React from 'react';
import PostModal from '../PostModal/postModal';
import {Card, Avatar, CardContent, Typography, CardActions, CardHeader, CardMedia, IconButton, Box} 
  from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import API from './fetchApi';
import Comment from './comment'
import { withStyles } from '@material-ui/core/styles';
import { getPostApiData ,getCommentsApiData} from './fetchApi';
import { connect } from 'react-redux';
import { setPostData } from '../../../../Redux/action'
import AddComment from './addComment'

const styles = theme => ({  
  media: { height: 0, paddingTop: '56.25%'},
  avatar: { backgroundColor: red[500] },
  postmargin: { marginTop: 10, marginBottom: 10 },
  subheading: { padding: 9},
  favorites: { padding: 0},
}); 

class Home extends React.Component { 
  constructor(props) {
    super(props)
    this.getComments = this.getComments.bind(this);
  } 

  getComments = (id, commState) => {
    // console.log(id); 
    // console.log(commState); 
    var postStateData = this.props.posts.postData;
    for(var i=0; i < postStateData.length; i++) { 
      if( postStateData[i].id === id ) {
        if(!postStateData[i].comments.length) {
          postStateData[i].comments = getCommentsApiData(id);
        } 
        postStateData[i].state = !commState;    
      } 
    } 
    this.props.setPostData(postStateData);    
  }

  componentDidMount = () => { 
    API.get("posts").then(res => { 
      var postData = getPostApiData(res.data);
      this.props.setPostData(postData);
    });
  } 

  render() { 
    const { classes } = this.props;
    const defaultProps = { bgcolor: 'background.paper', m: 1, style: { height: '2rem' }, borderColor: 'text.primary'};
    return (
      <div> 
        { this.props.posts.postData.map((postData, index) => 
          <Card key={index} className={classes.postmargin}>  
            <CardHeader
              avatar= { <Avatar className={classes.avatar}> {postData.name} </Avatar> }
              title={postData.title}
              subheader= {postData.time}
            />
            <CardMedia
              className={classes.media}
              image={postData.url}
              title="Paella dish"
            />
            <CardContent className={classes.subheading}>
              <Typography variant="body2" color="textSecondary" component="p">
                {postData.body}
              </Typography>
            </CardContent>
            <CardActions disableSpacing >
              <IconButton aria-label="add to favorites" className={classes.favorites}>
                <FavoriteIcon  /> 
                <Typography variant="body2" color="textSecondary" component="p">likes</Typography>
              </IconButton>

              <Box borderRight={1} {...defaultProps} />
          
              <IconButton aria-label="add to favorites" className={classes.favorites}  
                onClick={() => this.getComments(postData.id, postData.state)}>
                <ChatBubbleIcon />
                <Typography variant="body2" color="textSecondary" component="p">comment</Typography>
              </IconButton> 
            </CardActions>

            { postData.state  
              ? (postData.comments.length   
                  ? <Comment key={index} id={postData.id}/>  
                  : <> <AddComment getId={postData.id}/>  </> 
                )
              : ""
            }             
          </Card> 
        )}
        <PostModal />
      </div>
    ); 
  }   
}

const mapStateToProps = (state) => { 
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPostData: (payload) => dispatch(setPostData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));