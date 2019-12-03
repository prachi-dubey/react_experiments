import React from 'react';
import Home from '../Home/home.jsx';
import Profile from '../Profile/profile.jsx';
import { BrowserRouter as Router, Route, NavLink, Redirect, withRouter, Switch} from "react-router-dom";
import { makeStyles ,withStyles} from "@material-ui/core/styles";
import {AppBar, Tabs, Tab} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header: { marginTop: 15 },
  tabWidth: { minWidth: 231 , 
    [theme.breakpoints.down('xs')]: {
      minWidth: 25
    }
  }
})); 

const AntTabs = withStyles({
  indicator: { backgroundColor: '#f5f5f5'}
})(Tabs);

function DashboardTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div className={classes.header}>
        <AppBar position="static" color="default">
          <AntTabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab className={classes.tabWidth} activeStyle={{background:'#427ECF'}} label="Home" component={NavLink} to="/dashboard/home" />
            <Tab className={classes.tabWidth} activeStyle={{background:'#427ECF'}} label="Profile" component={NavLink} to="/dashboard/profile" />
          </AntTabs>
        </AppBar>
       
        <Switch>
          <Redirect exact from="/dashboard" to="/dashboard/home"/>
          <Route exact path={"/dashboard/home"} component={Home}/>
          <Route exact path={"/dashboard/profile"} component={Profile}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default withRouter(DashboardTabs);
