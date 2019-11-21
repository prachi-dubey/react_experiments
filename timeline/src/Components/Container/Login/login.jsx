import React from 'react';
import './login.scss'; 
import { Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginData: {        
        email: "", 
        password: "",       
      }
    }
  }  

  componentDidMount = () => {   
    const userDetails = JSON.parse(localStorage.getItem('PersonDetail'));
    for (var i = 0; i < userDetails.length; i++) {
      console.log(userDetails[i].isLoggedIn); 
      if(userDetails[i].isLoggedIn) {
        this.setState({
          loginData: {
            email: userDetails[i].email,
            password: userDetails[i].password
          }         
        }, () => {
          console.log(this.state.loginData);        
          this.props.onLoginData(this.state.loginData);
        });
      }
    } 
  } 

  loginDataValidation = (touched , errors) => { 
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (touched.email === "") {
      errors.email = "Email is required";
    } else if (!emailTest.test(touched.email)) {
      errors.email = "Invalid email address format";
    }

    if (touched.password === "") {
      errors.password = "password is required";
    } 
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4 login">
        <h1>Login form</h1>
        <Formik
          initialValues = { this.state.loginData } 
          validate={ touched => {
            let errors = {};
            this.loginDataValidation(touched , errors);
            return errors;
          }}
          onSubmit={(values, {setSubmitting, resetForm}) => {
            resetForm( this.state.loginData );  
            setSubmitting(false);  
            this.props.onLoginData(values);         
          }}          
        >
          {({ props,touched, errors, isSubmitting  }) => (
            <Form>
              <Field  name="email" label="email" component={TextField} />
              <Field name="password" label="password" component={TextField} />
              <button type="submit">  Submit </button>
            </Form>
          )}
        </Formik> 
      </div>
    );
  }
}
