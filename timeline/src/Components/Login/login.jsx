import React from 'react';
import './login.scss'; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

export class Login extends React.Component { 
  constructor(props) {
      super(props)
      this.state = {
        userData: {
          email: "", 
          password: "" ,
          id: ''
        }
      }
    this.getTabData = this.getTabData.bind(this);
  } 
  getTabData = (e) => {
    console.log("i am ......." + e); 
    this.props.onTabName(e);
  }

  userDataValidation = (values , errors) => { 
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!emailTest.test(values.email)) {
      errors.email = "Invalid email address format";
    }

    if (values.password === "") {
      errors.password = "password is required";
    } 
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4 login">
          <h4>Login </h4>
          <Formik 
            initialValues={this.state.userData} 
            validate={values => {
              let errors = {};
              this.userDataValidation(values , errors);
              return errors;
            }}
            onSubmit={(values, {setSubmitting, resetForm}) => {
              alert("form submitted");
              console.log(values);
              // this.getUserData(values);
              resetForm({email:'',password: ''});  
              setSubmitting(false); 
            }} 
          >
            {({ touched, errors, isSubmitting }) => (
            <Form> 
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" 
                className={`form-control ${
                  touched.email && errors.email ? "is-invalid" : ""
                }`} />
                <ErrorMessage component="div" name="email"
                  className="invalid-feedback"/>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="text" name="password" 
                className={`form-control ${
                  touched.password && errors.password ? "is-invalid" : ""
                }`} />
                <ErrorMessage component="div" name="password"
                  className="invalid-feedback"/>
              </div> 

              <button type="button" className="btn form-width" onClick={() => this.getTabData("signup")}>
                {/* Signup */}
                 {/* <Router> */}
                  <NavLink to="/signup"> Signup</NavLink> 
                  {/* <Route path="/signup"  component={Signup}/>  */}
                {/* </Router>      */} 
              </button>

              <button type="submit" className="btn form-width right"
                disabled={isSubmitting}>
                {isSubmitting ? "Please wait..." : "Submit"}
              </button>
            </Form>
            )}
          </Formik> 
        </div>
      </div>     
    )
  }
} 

