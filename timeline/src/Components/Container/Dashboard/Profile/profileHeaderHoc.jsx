import React from 'react';
import {AppBar, Toolbar, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({  
  basicInfo: { marginTop: 20 },
}); 

class ProfileHeader extends React.Component { 
  constructor(props) {
		super(props);
		this.state = {
			edit: false,
		};
    this.toggleContainer = this.toggleContainer.bind(this);
  } 
  
  toggleContainer() {
    console.log("toggle container");
		this.setState({
			edit: true
    }, () => {
      this.props.HeaderTest(this.state.edit, this.props.title);
    });   
  } 
  render() { 
    const { classes } = this.props;
    return ( 
      <>     
        <AppBar position="static" color="default" className={classes.basicInfo} >  
          <Toolbar> 
            <Grid container justify={"flex-start"}> {this.props.title} </Grid>
            <Grid container justify={"flex-end"}>  
              <button type="button" onClick={this.toggleContainer}> Edit </button> 
            </Grid>
          </Toolbar>
        </AppBar> 
      </>      
    );
  }  
} 

function WithProfileHeaderHOC(ProfileHeader) {
  return class extends React.Component{ 
    render() {  
      return <ProfileHeader {...this.props}/>;
    }
  }
}

export default WithProfileHeaderHOC(withStyles(styles)(ProfileHeader));