import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1},
  grid: { marginTop: 20, marginLeft: 30},
  basicInfo: { marginTop: 20 }  
}));

const Profile = () => {
  const classes = useStyles();
  console.log("in profile com");
  
  return (    
    <div className={classes.root}> 
      <AppBar className={classes.basicInfo} position="static" color="default">
        <Toolbar> 
          <Grid container justify={"flex-start"}>  Basic Information </Grid>
          <Grid container justify={"flex-end"}>  <button  type="button">Edit  </button> </Grid>
         </Toolbar>
      </AppBar> 

      <Paper>
        <Grid container spacing={1}> 
            <ProfileData name="Name" data="Raj Kundra" />
            <ProfileData name="Gender" data="Male" />
            <ProfileData name="BirthDate" data="N/A" />
            <ProfileData name="Marital Status" data="N/A" />
            <ProfileData name="Mobile" data="9087654321" />
          {/* <Grid container item xs={12} className={classes.grid}>
            <Grid container item  xs={2} sm={2}> Name :</Grid >
            <Grid container item  xs={10} sm={10}>  Raj Kundra</Grid>
          </Grid>

          <Grid container item xs={12} className={classes.grid}>
            <Grid container item  xs={2} sm={2}> Gender :</Grid >
            <Grid container item  xs={10} sm={10}> Male</Grid>
          </Grid>

          <Grid container item xs={12} className={classes.grid}>
            <Grid container item  xs={2} sm={2}> BirthDate :</Grid >
            <Grid container item  xs={10} sm={10}> N/A</Grid>
          </Grid>

          <Grid container item xs={12} className={classes.grid}>
            <Grid container item  xs={2} sm={2}> Marital Status :</Grid >
            <Grid container item  xs={10} sm={10}> N/A </Grid>
          </Grid>

          <Grid container item xs={12} className={classes.grid}>
            <Grid container item  xs={2} sm={2}> Mobile :</Grid >
            <Grid container item  xs={10} sm={10}> 9087654321 </Grid>
          </Grid> */}

        </Grid>
      </Paper> 
    </div>         
  );
};

export default Profile; 

const DisplayData = ({ name , data}) => { 
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.grid}>
      <Grid container item  xs={2} sm={2}> {name} :</Grid >
      <Grid container item  xs={10} sm={10}> {data} </Grid>
    </Grid>
  );
};

function profileHOC(WrappedComponent) {
  return class extends React.Component{
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
}

const ProfileData = profileHOC(DisplayData);



