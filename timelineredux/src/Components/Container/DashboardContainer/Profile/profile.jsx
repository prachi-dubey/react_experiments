import React from 'react';
import EditBasic from './EditBasic'
import EditWork from './EditWork'
import ProfileHeader from  './profileHeader'
import ProfileDisplayData from  './profileData'
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
      name:'',
      gender: '',
      mobile:'',
      profile:'',
      skills: [],
      birthdate: '',
      maritalStatus: ''
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
  
  storeData() {
    console.log("catch me in store function");
    // console.log(this.state.name);
    // console.log(this.state.birthdate);
    console.log(this.state.skills);
    
    
    const userDetails = JSON.parse(localStorage.getItem('PersonDetail'));
    for (var i = 0; i < userDetails.length; i++) {
      if(userDetails[i].isLoggedIn) {
        userDetails[i].name = this.state.name;
        userDetails[i].gender = this.state.gender
        userDetails[i].mobile = this.state.mobile
        userDetails[i].profile = this.state.profile
        userDetails[i].skills = this.state.skills
        userDetails[i].birthdate = this.state.birthdate
        userDetails[i].maritalStatus = this.state.maritalStatus
      }    
    }
    localStorage.setItem('PersonDetail', JSON.stringify(userDetails));
  }

  getEditBasicData(e) {
    // console.log(e); 
    // console.log(e.birthdate);
    var dateStr = String(e.birthdate);
    // console.log(typeof(dateStr));
    var dateTemp = new Date(dateStr);
    var birthdate = dateTemp.getDate() + '/' + dateTemp.getMonth() + '/' + dateTemp.getFullYear();
    // console.log(birthdate);
  
    this.setState({    
      editBasic: false,
      name: e.name,
      gender: e.gender,
      mobile: e.mobile,
      birthdate: birthdate,
      maritalStatus: e.maritalStatus     
    });
    this.storeData()
  } 

  getEditWorkData(e) {
    console.log(e); 
    this.setState({    
      editWork: false,
      profile: e.profile,
      skills: e.skills,
    });
    this.storeData()
  } 

  componentDidMount = () => {  
    const userDetails = JSON.parse(localStorage.getItem('PersonDetail'));
    for (var i = 0; i < userDetails.length; i++) {
      if(userDetails[i].isLoggedIn) {     
        console.log(typeof(userDetails[i].skills));
        // userDetails[i].skills = userDetails[i].skills.join(",")
        this.setState({
          name: userDetails[i].name,
          gender: userDetails[i].gender,
          mobile: userDetails[i].mobile,
          profile: userDetails[i].profile,
          skills: userDetails[i].skills,
          birthdate: userDetails[i].birthdate,
          maritalStatus: userDetails[i].maritalStatus,
        })         
      }
    } 
  } 
 
  render() {  
    console.log(this.state.skills)   
    const { classes } = this.props;
    let profileBasicComponent;
    let profileWorkComponent;
    let displaySkills = this.state.skills;
    displaySkills = displaySkills.join(", ");
    console.log(displaySkills);
    
    const basic = [
      {id: 1, name: 'Name', data: this.state.name}, 
      {id: 2, name: 'Gender', data: this.state.gender },
      {id: 3, name: 'BirthDate', data: this.state.birthdate },
      {id: 4, name: 'Marital Status', data: this.state.maritalStatus },
      {id: 5, name: 'Mobile', data: this.state.mobile },
    ];
    const work = [
      {id: 1, name: 'Profile', data: this.state.profile}, 
      {id: 2, name: 'Skills', data: displaySkills},
    ];

    if (this.state.editBasic) {
			profileBasicComponent = < EditBasic profileEditBasic={this.getEditBasicData} basic={this.state}/>;
		} else {
			profileBasicComponent = <> 
        <ProfileHeader title="Basic Information" HeaderTest={(editEvent, title) => this.getEditState(editEvent, title)}/>  
        <Paper className={classes.paper} > 
          {basic.map((basic) => (
            <ProfileDisplayData key={basic.id}  name={basic.name} data={basic.data} />
          ))} 
        </Paper>           
      </>
    }
    
    if (this.state.editWork) {
      profileWorkComponent = < EditWork profileEditWork={this.getEditWorkData} work={this.state}/>;
    } else {
      profileWorkComponent = <> 
        <ProfileHeader title="Work Information" HeaderTest={(editEvent, title) => this.getEditState(editEvent, title)}/> 
        <Paper className={classes.paper}>
          {work.map((work) => (
          < ProfileDisplayData key={work.id}  name={work.name} data={work.data} />
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