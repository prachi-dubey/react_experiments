import React from 'react';
import './login.scss'; 
import { Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";

export class Login extends React.Component {
 
  loginDataValidation = (touched , errors) => { 
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (touched.email === "") {
      errors.email = "Email is required";
    } else if (!emailTest.test(touched.email)) {
      errors.email = "Invalid email address format";
    }

    if (touched.password === "") {
      // console.log(values.password );
      errors.password = "password is required";
    } 
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4 login">
        <h1>Login form</h1>
        <Formik
           initialValues={{
            email: "",
            password: ""
          }}
          validate={touched => {
            let errors = {};
            this.loginDataValidation(touched , errors);
            return errors;
          }}
          onSubmit={(values, {setSubmitting, resetForm}) => {
            resetForm({email:'',
              password:''
            });  
            setSubmitting(false);  
            this.props.onLoginData(values);         
          }}          
        >
           {({ props,touched, errors, isSubmitting  }) => (
            <Form>
              <Field           
                name="email"
                label="email"
                component={TextField} 
              />

              <Field
                // required
                name="password"
                label="password"
                component={TextField}
              /> 

              <button type="submit"> 
                Submit
              </button>
            </Form>
          )}
        </Formik> 
      </div>
    );
  }
}
