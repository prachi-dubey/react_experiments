import React from 'react';
import './login.scss'; 
import { Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { connect } from 'react-redux';
import {setLoggedUser, getLoggedInUser } from '../../../Redux/action'
import helpers from '../../../Redux/helper';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginData: {        
        email: "", 
        password: "",       
      }
    }
    this.getLogginData = this.getLogginData.bind(this);
  }  

  getLogginData(e) {
    let userDetails = helpers.getData('PersonDetail');
    if(userDetails) {
      for (var i = 0; i < userDetails.length; i++) {
        if (userDetails[i].email ===  e.email && userDetails[i].password === e.password ) {
          userDetails[i].isLoggedIn = true;
          helpers.setLoggedinUser(userDetails[i]);
          this.props.setLoggedUser(userDetails[i]);         
        }
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
          validate = { touched => {
            let errors = {};
            this.loginDataValidation(touched , errors);
            return errors;
          }}
          onSubmit={(values, {setSubmitting, resetForm}) => {       
            resetForm( this.state.loginData );  
            setSubmitting(false); 
            this.getLogginData(values);         
          }}          
        >
          {({ props,touched, errors, isSubmitting  }) => (
            <Form>
              <Field type="email"  name="email" label="email" component={TextField} />
              <Field type="password" name="password" label="password" component={TextField} />
              <button type="submit">  Submit </button>
            </Form>
          )}
        </Formik> 
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedUser: (payload) => dispatch(setLoggedUser(payload)),
    getLoggedInUser: () => dispatch(getLoggedInUser()),
  };
};

export default connect(null, mapDispatchToProps)(Login);