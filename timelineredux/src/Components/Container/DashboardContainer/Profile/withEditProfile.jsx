import React from 'react'

const witheditprofile = (WrappedComponent, checkEdit) => {
  class WithEditProfile extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
          editBasic: '',
          editWork: '',
        }
      this.validation = this.validation.bind(this);
      this.submit = this.submit.bind(this);
    }
  
    validation = (values) => {
      const nameTest = /^[a-zA-Z\s]+$/;
      let errors = {}; 
      console.log(values);
      
      if(checkEdit === 'basic') {
        if ((values.name  === "")) {
          errors.name = "Name is required";
        } else if (!nameTest.test(values.name)) {
            errors.name = "Characters only";
        }
    
        if (values.gender === "") {
          errors.gender = "Please select one option for gender";
        }
        
        if (values.birthdate === "") {
          errors.birthdate = "Field is required";
        } 
    
        if (values.maritalStatus === "") {
          errors.maritalStatus = "Please select one option for gender";
        } 
        
        if (values.mobile === "") {   
          errors.mobile = "Mobile number is required";
        } 
      } else if(checkEdit === 'work') {
        if (values.profile === "") {
          errors.profile = "Please select one option";
        }
    
        if (values.skills === "") {
          errors.skills = "Please select one option";
        }
      } 
      return  errors ;      
    }

    submit = (values, {setSubmitting, resetForm}) => {
      alert("form submitted");  
      console.log(values);
      setSubmitting(false);
      if(checkEdit === 'basic') {
        resetForm({name:'', gender:'', birthdate: '', maritalStatus :'', mobile: ''}); 
        this.props.profileEditBasic(values); 
      } else  if(checkEdit === 'work') { 
        resetForm({profile:'', skills:'' }); 
        this.props.profileEditWork(values);
      } 
            
    }
    render() { 
      return <WrappedComponent validation={this.validation} 
        submit={this.submit}
        {... this.props}
      />
    } 
  }  
  return WithEditProfile  
} 

export default witheditprofile