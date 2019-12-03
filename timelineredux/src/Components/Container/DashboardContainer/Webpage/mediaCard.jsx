import React from 'react'; 
import {Typography, Card, CardActionArea, CardActions , CardContent} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles = theme => ({  
  header: { marginTop: 15},
  card: { maxWidth: 345, textAlign: 'center'},
  postComment: { 
    marginLeft: 20,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 50
    }
  },
}); 

class MediaCard extends React.Component {
  render() {  
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.header} gutterBottom  component="h2"> {this.props.loginData.name} </Typography>
          <Typography className={classes.card} color="textSecondary" component="p"> {this.props.loginData.profile} </Typography>       
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.postComment} >
        <div className="post-comment clearfix">
          <div className="post">
            <div><p>Posts</p></div>
            <div className="content-size"> 12M </div>
          </div>
          <div className="comment">
            <div><p>Comment</p></div>
            <div className="content-size"> 1 </div>
          </div>
          <div className="comment">
            <div><p>Following</p></div>
            <div className="content-size following-counts"> 12 </div>
          </div>
        </div>
      </CardActions>
    </Card>
    ); 
  }  
} 

const mapStateToProps = (state) => {  
  return {
    loginData : state.login.loggedInUser
  };
};

export default connect(mapStateToProps)(withStyles(styles)(MediaCard));