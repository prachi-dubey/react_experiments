import React from 'react';
import './loginForm.scss'; 
import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserConsumer, UserContext } from '../UserContext.jsx'

export default class LoginForm extends React.Component { 
  static contextType = UserContext;
  constructor(props) {
    super(props)
    this.state = {
      userData:  //this.context ? this.context.userData: 
      {firstname:'', lastname:'', email:'', mobile: '' }
    }
    this.getUserData = this.getUserData.bind(this);
  } 

  getUserData = (values) => {
    this.props.onUserData(values);
  }
  
  // componentDidUpdate() {
  //   // console.log( this.context.userData.firstname);
  //   // console.log( this.state.userData.firstname);
  //   // console.log(this.context.userData.firstname !== this.state.userData.firstname);
    
  //   if(this.state.userData.firstname && (this.context.userData.firstname != this.state.userData.firstname)) {
  //     this.setState({
  //       ...this.context.userData  
  //     });
  //   }
  // } 

  componentDidMount() {
    console.log("hii iam here");  
    console.log(this.context);
    console.log(this.context.userData.firstname);
    if(this.context.userData.firstname) {
      this.setState({
        userData: { 
          firstname: this.context.userData.firstname, 
          lastname: this.context.userData.lastname,
          email: this.context.userData.email, 
          mobile: this.context.userData.mobile,
        } 
      });
    }
  }
 
  userDataValidation = (values , errors) => { 
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameTest = /^[a-zA-Z]+$/;
    const mobileTest = /^[0-9]{10}$/;

    if (values.firstname === "") {
        errors.firstname = "FirstName is required";
      } else if (!nameTest.test(values.firstname)) {
        errors.firstname = "Characters only";
    }
    if (values.lastname === "") {
        errors.lastname = "LastName is required";
    } else if (!nameTest.test(values.lastname)) {
        errors.lastname = "Characters only";
    }
    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!emailTest.test(values.email)) {
      errors.email = "Invalid email address format";
    }

    if (values.mobile === "") {
      errors.mobile = "Mobile number is required";
    } else if (!mobileTest.test(values.mobile)){   
      errors.mobile = "Mobile should be number and 10 digits only";
    } 
  }
  
  render() {
    console.log(this.context);
    console.log(this.context.userData);
    console.log(" test me");
    
    return (
      <div className="col-md-6 col-md-offset-3">
        <div className="row">
          <div className="col-sm-10">
            <h1>User Enter Data</h1> 
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10"> 
            <Formik 
              enableReinitialize
              initialValues={this.state.userData} 
              validate={values => {
                let errors = {};
                this.userDataValidation(values , errors);
                return errors;
              }}
              onSubmit={(values, {setSubmitting, resetForm}) => {
                alert("form submitted");
                console.log(values);
                this.getUserData(values);
                // resetForm({firstname:'', lastname:'', email:'',
                //   mobile: '', gender:'', profile:'', skills:[]
                // });  
                setSubmitting(false); 
              }} 
            >
              {({ touched, errors, isSubmitting ,values}) => (
              <Form> 
                <div className="form-group">
                  <label htmlFor="firstname">First Name</label>
                  <Field type="text" name="firstname"
                  className={`form-control ${
                    touched.firstname && errors.firstname ? "is-invalid" : ""
                  }`} />
                  <ErrorMessage component="div" name="firstname"
                    className="invalid-feedback"/>
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">Last Name</label>
                  <Field type="text" name="lastname" 
                  className={`form-control ${
                    touched.lastname && errors.lastname ? "is-invalid" : ""
                  }`} />
                  <ErrorMessage component="div" name="lastname"
                    className="invalid-feedback"/>
                </div>

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
                  <label htmlFor="mobile">Mobile</label>
                  <Field type="text" name="mobile" 
                  className={`form-control ${
                    touched.mobile && errors.mobile ? "is-invalid" : ""
                  }`} />
                  <ErrorMessage component="div" name="mobile"
                    className="invalid-feedback"/>
                </div> 

                <button type="submit" className="btn btn-primary form-width btn-block" 
                  disabled={isSubmitting}>
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
              </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    )
  }
} 

function Checkbox(props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <label>
          <input
            {...field}
            type="checkbox"
            onChange={() => {
            //A set is a collection of items which are unique i.e no element can be repeated. 
            //Set in ES6 are ordered:
              const set = new Set(field.value); 
              if (set.has(props.value)) {
                set.delete(props.value);
              } else {
                set.add(props.value);
              }
              field.onChange(field.name)(Array.from(set));
            }}
          />
          {props.value}
        </label>
      )}
    </Field>
  );
}


  