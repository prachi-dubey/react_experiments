import React from 'react';
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography
  } from '@material-ui/core';
import AddComment from './addComment'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';


const styles = theme => ({  
  root: { width: '20%',},
  heading: { fontSize: theme.typography.pxToRem(15), marginTop: 6},
  details: { alignItems: 'center',},
}); 

class Comment extends React.Component { 
  render() {  
    const { classes } = this.props;
    var postDataArr = this.props.posts.postData;
    // console.log(postDataArr);
    // console.log( this.props.id );
    return (
      <div> 
        { postDataArr.map((item, index) => {
          return ( <div key={index}> {(this.props.id === item.id) 
            ? item.comments.map((comment, i) => {
                return (
                  <ExpansionPanel  key={i}>
                    <ExpansionPanelSummary> 
                      <Typography className={classes.heading}>{comment.email}</Typography>           
                    </ ExpansionPanelSummary> 
                    <ExpansionPanelDetails>
                      <Typography color="textSecondary">{comment.body}</Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                )
              })  
            : 
              <></>
            }       
          </div> )
          })
        } 
        <AddComment getId={this.props.id }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return state
};

export default connect(mapStateToProps)(withStyles(styles)(Comment));