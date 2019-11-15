import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles"; 

const useStyles = makeStyles(theme => ({
  grid: { marginTop: 20, 
    marginLeft: 30,
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      marginLeft: 8,
    }
  },
}));

const DisplayData = ({ name , data}) => { 
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.grid}>
      <Grid container item  xs={4} sm={2}> {name} :</Grid >
      <Grid container item  xs={8} sm={10}> {data} </Grid>
    </Grid>
  );
};

function WithProfileDataHOC(WrappedComponent) {
  return class extends React.Component{
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
}

export default WithProfileDataHOC(DisplayData);