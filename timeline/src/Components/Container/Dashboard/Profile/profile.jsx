import React from 'react';
import ProfileEditBasic from './profileBasic/profileEditBasic.jsx'
import ProfileEditWork from './profileWork/profileEditWork.jsx'
import WithProfileHeaderHOC from  './profileHeaderHoc.jsx'
import WithProfileDataHOC from  './profileDataHoc.jsx'
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({  
  paper: { paddingTop: 10,
    paddingBottom: 10,
  },
}); 

class Profile extends React.Component { 
  constructor(props) {
		super(props);
		this.state = {
      editBasic: '',
      editWork: '',
		};
    this.getEditBasicData = this.getEditBasicData.bind(this);
    this.getEditWorkData = this.getEditWorkData.bind(this);
    this.getEditState = this.getEditState.bind(this);
  } 
  
  getEditState(editEvent, title) {
    console.log(editEvent); 
    console.log("edit data"+ title); 
    if(title === 'Basic Information') {
      this.setState({    
        editBasic: editEvent,
      });
    } else if(title === 'Work Information') {
      this.setState({    
        editWork: editEvent,
      });
    }
  } 

  getEditBasicData(e) {
    console.log(e); 
    this.setState({    
			editBasic: false,
		});
  } 

  getEditWorkData(e) {
    console.log(e); 
    this.setState({    
			editWork: false,
		});
  } 
 
  render() { 
    const { classes } = this.props;
    let profileBasicComponent;
    let profileWorkComponent;
    const basic = [
      {id: 1, name: 'Name', data: 'Raj Kundra'}, 
      {id: 2, name: 'Gender', data: 'Male' },
      {id: 3, name: 'BirthDate', data: 'N/A' },
      {id: 4, name: 'Marital Status', data: 'N/A' },
      {id: 5, name: 'Mobile', data: '9087654321' },
    ];

    const work = [
      {id: 1, name: 'Profile', data: 'Frontend'}, 
      {id: 2, name: 'Skills', data: 'Angular' },
    ];

   if (this.state.editBasic) {
			profileBasicComponent = < ProfileEditBasic profileEditBasic={this.getEditBasicData}/>;
		} else {
			profileBasicComponent = <> 
        <WithProfileHeaderHOC title="Basic Information" HeaderTest={(editEvent, title) => this.getEditState(editEvent, title)}/>  
          <Paper className={classes.paper} > 
            {basic.map((basic) => (
              < WithProfileDataHOC key={basic.id}  name={basic.name} data={basic.data} />
            ))} 
          </Paper>           
      </>
    }

    if (this.state.editWork) {
			profileWorkComponent = < ProfileEditWork profileEditWork={this.getEditWorkData}/>;
		} else {
			profileWorkComponent = <> 
        <WithProfileHeaderHOC title="Work Information" HeaderTest={(editEvent, title) => this.getEditState(editEvent, title)}/> 
        <Paper className={classes.paper}>
         {work.map((work) => (
          < WithProfileDataHOC key={work.id}  name={work.name} data={work.data} />
         ))} 
        </Paper>           
      </>
    }
  
    return ( 
      <>  
        {profileBasicComponent}  
        {profileWorkComponent}
      </>      
    );
  }  
} 

export default withStyles(styles)(Profile);