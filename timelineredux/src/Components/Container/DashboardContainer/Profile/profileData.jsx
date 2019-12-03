import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles"; 

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1},
  grid: { 
    marginTop: 20,
    marginLeft: 20,   
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      marginLeft: 10
    }
  },
}));

const ProfileDisplayData = ({ name , data}) => { 
  const classes = useStyles();
  return (
    <div>
      <Grid container> 
        <Grid item xs={4} sm={2}> 
          <div className={classes.grid} > {name} : </div> </Grid >
        <Grid item  xs={8} sm={10}> 
          <div className={classes.grid} > {data}  </div> 
        </Grid >
      </Grid>
    </div>
  );
};

export default ProfileDisplayData;