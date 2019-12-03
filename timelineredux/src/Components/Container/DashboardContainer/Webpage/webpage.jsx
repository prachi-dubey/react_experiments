import React from 'react';  
import MediaCard from './mediaCard'
import DashboardTabs from "../Tabs/tabs"
import mountain from "../../../../assets/mountain.jpg";
import whiteDaisy from "../../../../assets/White-Daisy.jpg";
import { Grid, Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1},
  userTile: { marginTop: 20},
  defaultImage: { height: 140, width: '100%', position: 'relative'},
  defaultLogo: { height: 60.54, width: 60, position: 'absolute', top: 198, left: "10.5%" ,
    [theme.breakpoints.down('xs')]: {
      top: 178,
      left: "40%"
    }
  },
  space: { marginLeft: 8, marginRight: 8}
}));
    
const WebPage = () => {
  const classes = useStyles(); 
  return ( 
    <div className={classes.root}>
      <Grid className= {classes.userTile} container>
        <Grid item xs={12} sm={3}>
          <div className= {classes.space}> 
            <img className= {classes.defaultImage} src={mountain} alt="mountain"/>
            <Avatar className= {classes.defaultLogo} src={whiteDaisy} alt="mountain" />
            <MediaCard/>
          </div>         
        </Grid>

        <Grid  item xs={12} sm={9}> 
          <div className= {classes.space}>
            <img className= {classes.defaultImage} src={mountain} alt="mountain"/>
            <DashboardTabs/>
          </div>          
        </Grid>
      </Grid>      
    </div>
  );
};

export default WebPage;