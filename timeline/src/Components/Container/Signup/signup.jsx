import React from 'react';
import './signup.scss'; 
import { Formik, Form, Field, ErrorMessage  } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";

export class Signup extends React.Component { 
  constructor(props) {
    super(props)
      this.state = {
        userData: {
          firstname:"", 
          lastname:"", 
          email: "", 
          password: "",
          mobile: "" ,
          gender:"", 
          profile:'',
          skills: [],
          id: ''
        }
      }
    this.textInput = React.createRef();
    this.getUserData = this.getUserData.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  } 

  getUserData = (values) => {
    // localStorage.removeItem("PersonDetail");       // all comments part is now for testing
    localStorage.setItem('UserData', "hello");
    var dataCheck = JSON.parse(localStorage.getItem('PersonDetail'));
    if(!dataCheck) {
      dataCheck = [];
    }
    dataCheck.push(values);
    console.log(dataCheck); 
    localStorage.setItem('PersonDetail', JSON.stringify(dataCheck));  
  } 

  focusTextInput = () => { 
    var value = this.textInput.current.value;
    if(value.length <= 12) { 
      if(value.length === 3 ) {   
        value = value.concat( '-' );  
        this.textInput.current.value = value;
      }
      if(value.length === 8 ) {   
        value = value.concat( '-' );
        this.textInput.current.value = value;  
      } 
    } else {
      this.textInput.current.value = value.substr(0, 12);
    }   
  } 
  
  userDataValidation = (values, errors ) => {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameTest = /^[a-zA-Z]+$/;
    const mobileTest = /^\d{3}-\d{4}-\d{3}$/;

    if ((values.firstname  === "") && (values.firstname.length === 0)) {
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

    if (values.password === "") {
      errors.password = "password is required";
    } 

    if (values.mobile === "") {   
      errors.mobile = "Mobile number is required";
    } else if (!mobileTest.test(values.mobile)){   
      errors.mobile = "Mobile should be number and 10 digits only";
    } 

    if (values.profile === "") {
      errors.profile = "Please select one option";
    } 

    if (values.gender === "") {
      errors.gender = "Please select one option for gender";
    } 

    if ( values.skills.length === 0) {
      errors.skills = "Please select at least one option";
    } 
  }
  
  render() {
    return (
    <div className="col-md-6 col-md-offset-4 signup">
      <h4>Signup form</h4>
      <Formik 
        enableReinitialize
        initialValues={this.state.userData} 
        validate={(values) => { let errors = {};
          values.mobile = this.textInput.current.value;
          this.userDataValidation(values, errors);
          return  errors;         
        }}
        onSubmit={(values, {setSubmitting, resetForm}) => { 
          alert("form submitted");  
          console.log(values);
          this.getUserData(values);
          resetForm({firstname:'', lastname:'', email:'', password:'',
            mobile: '', gender:'', profile:'', skills:[]
          });  
          setSubmitting(false);
        }} 
      >
        {({ touched, errors }) => (
        <Form> 
          <Field name="firstname" label="firstname" component={TextField} />
          <Field name="lastname" label="lastname" component={TextField} />
          <Field name="email" label="email" component={TextField} /> 
          <Field name="password" label="password" component={TextField}/> 
          <Field name="profile" options={[
            { value: 'Software Developer', label: 'Software Developer' },
            { value: 'Tester', label: 'Tester' },
            { value: 'Networking', label: 'Networking' },
            { value: 'HR Manage', label: 'HR Manage' },]}
            component={Select}
          /> 
          
          <div className="form-group"> 
            <label htmlFor="mobile" className="dp-style" >Mobile</label>
            <Field name="mobile" label="mobile"
              render={() => 
                <CustomMobileInput ref={this.textInput} keyUpEvent={this.focusTextInput}
                className={` dp-style input-width ${ touched.mobile && errors.mobile ? "is-invalid" : ""}`}/>
              } 
            /> 
            <ErrorMessage component="div" name="mobile" className="invalid-feedback"/>
          </div>            
          
          <div className="form-group" name="gender" value="">
            <label htmlFor="gender" className="dp-style">Gender</label>
            <div className="radio-inline dp-style">
              <Field type="radio" name="gender" value="male" className={`${
                touched.gender && errors.gender ? "is-invalid" : ""}`}/> 
              <label>Male</label>
            </div>
            <div className="radio-inline dp-style">
              <Field type="radio" name="gender" value="female"
                className={`${ touched.gender && errors.gender ? "is-invalid" : ""}`}/>
              <label>Female</label>
            </div>
            <ErrorMessage component="div" name="gender"className="invalid-feedback"/>
          </div>          

          <div value="" className={`form-group ${ touched.skills && errors.skills ? "is-invalid" : ""}`}>
            <label>Skills</label>
            <div className="checkbox"><Checkbox name="skills" value="Node js" /></div>
            <div className="checkbox"><Checkbox name="skills" value="Oracle" /></div>
            <div className="checkbox"><Checkbox name="skills" value="Angular" /></div>
            <div className="checkbox"><Checkbox name="skills" value="ROR" /></div>
            <ErrorMessage component="div" name="skills" className="invalid-feedback"/>
          </div> 

          <button type="submit" className="btn btn-primary form-width btn-block"> Submit</button>
        </Form>
        )}  
        </Formik>
      </div>      
    )
  }
} 

function Checkbox(props) {
  return (
    <Field name={props.name}>{({ field, form }) => (
      <label> <input {...field} type="checkbox" onChange={() => {
        const set = new Set(field.value); 
          if (set.has(props.value)) {
            set.delete(props.value);
          } else {
            set.add(props.value);
          }
        field.onChange(field.name)(Array.from(set));
      }}/>{props.value}</label>
      )}
    </Field>
  );
} 

const CustomMobileInput = React.forwardRef((props, ref) =>  ( 
  <> <input type="text" ref={ref} onKeyUp={() => props.keyUpEvent()} /> </>
  )
);