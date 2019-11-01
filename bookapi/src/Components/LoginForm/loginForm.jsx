import React from 'react';
import './loginForm.scss'; 
import { Formik, Form, Field, ErrorMessage } from "formik";

export class LoginForm extends React.Component { 
  constructor(props) {
      super(props)
      this.state = {
        userData: {
          firstname:"", 
          lastname:"", 
          email: "", 
          mobile: "" ,
          gender:"", 
          profile:'',
          skills: [],
          id: ''
        }
      }
    this.getUserData = this.getUserData.bind(this);
  } 

  getUserData = (values) => {
    this.props.onUserData(values);
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

    if (values.gender === "") {
      errors.gender = "Please select one option for gender";
    } 

    if (values.profile === "") {
      errors.profile = "Please select one option";
    } 
    
    if ( values.skills.length === 0) {
      errors.skills = "Please select at least one option";
    } 
  }
  
  render() {
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
                resetForm({firstname:'', lastname:'', email:'',
                  mobile: '', gender:'', profile:'', skills:[]
                });  
                setSubmitting(false); 
              }} 
            >
              {({ touched, errors, isSubmitting }) => (
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

                <div className="form-group" name="gender" value="">
                  <label htmlFor="gender" className="dp-style">Gender</label>
                  <div className="radio-inline dp-style">
                    <Field type="radio" name="gender" value="male"
                      className={`${
                      touched.gender && errors.gender ? "is-invalid" : ""
                      }`}/> 
                    <label>Male</label>
                  </div>
                  <div className="radio-inline dp-style">
                    <Field type="radio" name="gender" value="female"
                      className={`${
                      touched.gender && errors.gender ? "is-invalid" : ""
                      }`}/>
                    <label>Female</label>
                  </div>
                  <ErrorMessage component="div" name="gender"
                    className="invalid-feedback"/>
                </div>

                <div className="form-group">
                  <Field name="profile" component="select"
                    className={`form-control form-width ${
                      touched.profile && errors.profile ? "is-invalid" : ""
                    }`}>
                    <option value="">please select profile</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Tester">Tester</option>
                    <option value="Networking">Networking</option>
                    <option value="Sales Executive">Sales Executive</option>
                    <option value="HR Manager">HR Manager</option>
                  </Field> 
                  <ErrorMessage component="div" name="profile"
                    className="invalid-feedback"/>
                </div>  

                <div value="" className={`form-group ${
                    touched.skills && errors.skills ? "is-invalid" : ""
                  }`}>
                  <label>Skills</label>
                  <div className="checkbox">
                    <Checkbox name="skills" value="Node js" />
                  </div>
                  <div className="checkbox">
                    <Checkbox name="skills" value="Oracle" />
                  </div>
                  <div className="checkbox">
                    <Checkbox name="skills" value="Angular" />
                  </div>
                  <div className="checkbox">
                    <Checkbox name="skills" value="ROR" />
                  </div>
                  <ErrorMessage component="div" name="skills"
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


  