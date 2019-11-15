import React from 'react';
import './profileEditBasic.scss'; 
import { Formik, Form, Field } from "formik";
import Paper from '@material-ui/core/Paper';
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";

export default class ProfileEditBasic extends React.Component { 
  constructor(props) {
    super(props)
      this.state = {
        editProfile: {
          name:"", 
          gender:"", 
          birthdate: "", 
          maritalStatus: "",
          mobile: "" ,
        }
      }
    this.profileDataValidation = this.profileDataValidation.bind(this)
  } 

  profileDataValidation = (touched) => {
    const nameTest = /^[a-zA-Z]+$/;
    let errors = {};  
    if ((touched.name  === "")) {
       errors.name = "Name is required";
    } else if (!nameTest.test(touched.name)) {
        errors.name = "Characters only";
    }

    if (touched.gender === "") {
      errors.gender = "Please select one option for gender";
    }
    
    if (touched.birthdate === "") {
      errors.birthdate = "Field is required";
    } 

    if (touched.maritalStatus === "") {
      errors.maritalStatus = "Please select one option for gender";
    } 
    
    if (touched.mobile === "") {   
      errors.mobile = "Mobile number is required";
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
          resetForm({name:'', gender:'', birthdate: '', maritalStatus :'', mobile: ''});  
          this.props.profileEditBasic(values);  
        }} 
        >
          {({ errors, touched}) => (
          <Form className="profile-edit-form"> 
            <Field name="name" label="Name" component={TextField} />

            <Field name="gender" label="Gender" options={[
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },]}
              component={Select}
            />    

            <Field name="birthdate" label="Birthdate" component={TextField} />
            <Field name="maritalStatus" label="marital status" options={[
              { value: 'Single', label: 'Single' },
              { value: 'Married', label: 'Married' },]}
              component={Select}
            /> 
            
            <Field name="mobile" label="Mobile" component={TextField} />  
            <button type="submit" className=" button-test btn btn-primary btn-block"> Submit</button>
          </Form>
          )}  
        </Formik>    
      </Paper>     
    )
  }
}  


// const checkTemp = ({touched}) => { 
//   console.log(touched);
//   console.log("test me");
  
  
//   // return (
//   //   // <Grid container item xs={12} className={classes.grid}>
//   //   //   <Grid container item  xs={4} sm={2}> {name} :</Grid >
//   //   //   <Grid container item  xs={8} sm={10}> {data} </Grid>
//   //   // </Grid>
//   // );
// };

// function checkTempHoc(WrappedComponent) {
//   return class extends React.Component{
//     render() {
//       // console.log(this.props);     
//       return <WrappedComponent {...this.props}/>;
//     }
//   }
// }

// const checkValidation = checkTempHoc(checkTemp);


