import React from 'react';  
import './dashboard.scss'; 
import SimpleTabs from "./Tabs/tabs.jsx"
import mountain from "../../../assets/mountain.jpg";
import whiteDaisy from "../../../assets/White-Daisy.jpg";
import {Typography, Grid, Avatar, Card, CardActionArea, CardActions , CardContent} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";

class Dashboard extends React.Component { 
  render() {
    console.log("comming in dashboard");  
    return (
      <React.Fragment> 
        <Switch>       
          <Route  path="/dashboard" component={WebPage}/> 
        </Switch>
      </React.Fragment> 
    ); 
  }   
}  

export default Dashboard; 

const useStyles = makeStyles(theme => ({
  container: { marginTop: 20 },
  header: { marginTop: 15, },
  mounatin: { height: 140, width: '100%', position: 'relative'},
  whiteDaisy: { height: 60.54, width: 60, position: 'absolute', top:198, left: "10.5%"},
  card: { maxWidth: 345, textAlign: 'center'},
  media: { height: 140},
}));
    
const WebPage = () => {
  const classes = useStyles(); 
  console.log("comming in webpage");
  
  return ( 
    <div>
      <Grid className= {classes.container} container spacing={2}>
        <Grid item xs={3} sm={3}>
          <img className= {classes.mounatin} src={mountain} alt="mountain"/>
          <Avatar className= {classes.whiteDaisy} src={whiteDaisy} alt="mountain" />
          <MediaCard/>
        </Grid>

        <Grid item xs>
          <img className= {classes.mounatin} src={mountain} alt="mountain"/>
          <SimpleTabs/>
        </Grid>
      </Grid>      
    </div>
  );
};

function MediaCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.header} gutterBottom  component="h2">Name</Typography>
          <Typography className={classes.card} color="textSecondary" component="p">position</Typography>       
        </CardContent>
      </CardActionArea>
      <CardActions>
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
 


