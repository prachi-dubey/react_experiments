import React from 'react';  
import './dashboard.scss'; 
import SimpleTabs from "./Tabs/tabs.jsx"
import mountain from "../../../assets/mountain.jpg";
import whiteDaisy from "../../../assets/White-Daisy.jpg";
import {Typography, Grid, Avatar, Card, CardActionArea, CardActions , CardContent} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch} from "react-router-dom";

class Dashboard extends React.Component { 
  render() {
    return (
      <React.Fragment> 
        <Switch> 
          {/* <Route path="/dashboard" component={Dashboard} />        */}
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
  whiteDaisy: { height: 60.54, width: 60, position: 'absolute', top: 198, left: "10.5%" ,
    [theme.breakpoints.down('xs')]: {
      top: 185,
      left: "42%"
    }
  },
  card: { maxWidth: 345, textAlign: 'center'},
  media: { height: 140},
  postComment: { 
    marginLeft: 20,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 50
    }
  }
}));
    
const WebPage = () => {
  const classes = useStyles(); 
  return ( 
    <div>
      <Grid className= {classes.container} container spacing={2}>
        <Grid item xs={12} sm={3}>
          <img className= {classes.mounatin} src={mountain} alt="mountain"/>
          <Avatar className= {classes.whiteDaisy} src={whiteDaisy} alt="mountain" />
          <MediaCard/>
        </Grid>

        <Grid item xs={12} sm={9}>
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
 


