import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import Tab from "@material-ui/core/Tab";
import test from "../../assets/logo.jpg";
import { BrowserRouter as Router,  NavLink} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  logo: {
    height: 43.54
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <AppBar position="static" color="default" className={classes.header}>
        <Toolbar>
          <img className={classes.logo} src={test} alt="dashboard Logo"/>
          <Grid container justify={"flex-end"}>
            <NavLink to="/login" > <Tab label={"Login"}  /></NavLink>
            <NavLink to="/signup" > <Tab label={"Signup"} /></NavLink>
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Header;
