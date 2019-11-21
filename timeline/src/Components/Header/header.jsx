import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Toolbar, Tab, AppBar, Grid} from "@material-ui/core";
import logo from "../../assets/logo.jpg";
import { NavLink} from "react-router-dom";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  logo: { height: 43.54 }
});

const Header = (props) => {
  const classes = useStyles();
  // console.log(props.logout);

  return (
    <nav className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar> 
          <img className={classes.logo} src={logo} alt="dashboard Logo"/>
          <Grid container justify={"flex-end"}> 
            {props.logout ? 
              <NavLink to="/login">
               <Tab label={"logout"}  onClick={props.onLogoutUpdate}/>
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
}; 

export default Header;
