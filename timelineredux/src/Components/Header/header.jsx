import React from "react";
import {Toolbar, Tab, AppBar, Grid} from "@material-ui/core";
import logo from "../../assets/logo.jpg";
import { NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { getLoggedInUser, unSetLoggedUser , setLoggedUser} from '../../Redux/action'
import helpers from '../../Redux/helper';

const styles = theme => ({  
  root: { flexGrow: 1 },
  logo: { height: 43.54 }
});  

class Header extends React.Component {
  constructor() {
    super();
    this.getLogout = this.getLogout.bind(this);
  } 

  getLogout() {
    let userLogginState =  this.props.loginData.loggedInUser;   
    userLogginState.isLoggedIn = false; 
    helpers.setLoggedinUser(userLogginState);
    this.props.unSetLoggedUser(userLogginState);
  }

  componentDidMount() {
    let loggedUser = helpers.getLoggedinUser('PersonDetail');
    this.props.setLoggedUser(loggedUser);    
  } 

  render() {  
    const { classes } = this.props;
    return (  
      <nav className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar> 
            <img className={classes.logo} src={logo} alt="dashboard Logo"/> 
            <Grid container justify={"flex-end"}> 
              {this.props.loginData.loggedInUser.isLoggedIn ? 
                <NavLink to="/login">
                  <Tab label={"logout"} onClick={this.getLogout}/>
                </NavLink>
                :            
                <>
                  <NavLink to="/login" > <Tab label={"Login"}  /></NavLink>
                  <NavLink to="/signup" > <Tab label={"Signup"} /></NavLink>
                </>
              }
            </Grid>
          </Toolbar>
        </AppBar>
      </nav>
    ); 
  }  
} 

const mapStateToProps = (state) => {  
  return {
    loginData : state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLoggedInUser: () => dispatch(getLoggedInUser()),
    unSetLoggedUser: (payload) => dispatch(unSetLoggedUser(payload)),
    setLoggedUser: (payload) => dispatch(setLoggedUser(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));