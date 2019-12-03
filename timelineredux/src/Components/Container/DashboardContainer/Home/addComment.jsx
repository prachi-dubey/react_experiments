import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { setPostData } from '../../../../Redux/action'

const styles = theme => ({  
  buttonStyle: {marginTop: 10},
  grid: {marginBottom: 10, marginLeft: 10}
}); 

class AddComment extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: '',
    } 
    this.getNewComment = this.getNewComment.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
  } 

  getNewComment = (userAction) => {  
    if(userAction === 'save') {
      var postStateData = this.props.posts.postData;
      for(var i=0; i < postStateData.length; i++) { 
        if(postStateData[i].id === this.props.getId) { 
          let comment = { email: this.props.login.loggedInUser.email, body: this.state.textFieldValue }
          postStateData[i].comments.push(comment);   
        }
      } 
      this.props.setPostData(postStateData); 
    } 
    this.setState ({ textFieldValue: '' }); 
  }

  handleTextFieldChange(e) {
    this.setState ({ textFieldValue: e.target.value});
  }

  render() { 
    const { classes } = this.props;
    return (
      <Grid container className={classes.grid} > 
        <Grid item xs={8} sm={10}> 
          <TextField value={this.state.textFieldValue} onChange={this.handleTextFieldChange} 
            label="Add comment"> </TextField>  
        </Grid >
        <Grid item xs={4} sm={2}> 
          <Button onClick={() => this.getNewComment('save')} className={classes.buttonStyle} 
            color="primary"> save
          </Button>
          <Button onClick={() => this.getNewComment('cancel')} className={classes.buttonStyle} 
            color="primary"> cancel
          </Button> 
        </Grid>
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddComment));