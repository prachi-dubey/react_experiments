import React from 'react';
import { Formik, Form, Field } from "formik";
import Paper from '@material-ui/core/Paper';
import { Select } from "material-ui-formik-components/Select";

export default class ProfileEditWork extends React.Component { 
  constructor(props) {
    super(props)
      this.state = {
        editProfile: {
          profile: '',
          skills: ''
        }
      }
    this.profileDataValidation = this.profileDataValidation.bind(this)
  } 

  profileDataValidation = (touched) => {
    let errors = {};  
    if (touched.profile === "") {
      errors.profile = "Please select one option";
    }

    if (touched.skills === "") {
      errors.skills = "Please select one option";
    }
    return  errors ;      
  }
  
  render() {
    return (
      <Paper> 
        <Formik 
        enableReinitialize
        initialValues={this.state.editProfile} 
        validate={touched  => this.profileDataValidation(touched) }
        onSubmit={(values, {setSubmitting, resetForm}) => { 
          alert("form submitted");  
          console.log(values);
          setSubmitting(false);
          resetForm({profile:'', skills:'' });  
          this.props.profileEditWork(values);  
        }} 
        >
          {({ errors, touched}) => (
          <Form className="profile-edit-form"> 
            <Field name="profile" label="profile" options={[
              { value: 'Tester', label: 'Tester' },
              { value: 'Backend', label: 'Backend' },
              { value: 'Frontend', label: 'Frontend' },
              { value: 'Developer', label: 'Developer' },]}
              component={Select}
            />    
            
            <Field name="skills" label="skills" options={[
              { value: 'Java', label: 'Java' },
              { value: 'Oracle', label: 'Oracle' },
              { value: 'Angular', label: 'Angular' },
              { value: 'Database', label: 'Database' },]}
              component={Select}
            /> 

            <button type="submit" className=" button-test btn btn-primary btn-block"> Submit</button>
          </Form>
          )}  
        </Formik>    
      </Paper>     
    )
  }
}  
