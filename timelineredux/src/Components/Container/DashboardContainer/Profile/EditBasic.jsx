import React from 'react';
// import './profileEditBasic.scss'; 
import RefInputMobile from "./refInputMobile.jsx"
import witheditprofile from './withEditProfile.jsx'
import { Formik, Form, Field, ErrorMessage } from "formik";
import Paper from '@material-ui/core/Paper';
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const styles = theme => ({  
  form: { padding: 10,
  },
});  

const FormikDatePicker = ({ name, form: { setFieldValue }, field: { value }, ...props}) => {
  return (
    <KeyboardDatePicker name={name} label="Birthdate" format="dd/MM/yyyy" placeholder="10/10/2018"
      onChange={value => {
        console.log("setting value to", value);
        setFieldValue("birthdate", value);
      }}
      value={value}
    />
  );
};

class EditBasic extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      editProfile: {
        name:"", 
        gender:"", 
        maritalStatus: "",
        mobile: "" ,
      }
    }
    this.getMobileValue = this.getMobileValue.bind(this);
  }  

  getMobileValue = (e) => {
    console.log("mobile " + e );
    this.setState({
      editProfile: {
        mobile: e ,
      }
    })   
  }
  
  componentDidMount() {
    console.log("check me before going to form edit");
    this.setState({
      editProfile: {
        name: this.props.basic.name, 
        gender: this.props.basic.gender, 
        maritalStatus: this.props.basic.maritalStatus,
        date: this.props.basic.date,
        mobile: this.props.basic.mobile ,
      }
    })    
  }

  render() {
    const { classes } = this.props;
    const { validation ,submit} = this.props;
    
    return (
      <Paper> 
        <MuiPickersUtilsProvider utils={DateFnsUtils}> 
        <Formik 
        enableReinitialize
        initialValues={this.state.editProfile} 
        validate={(values)  => { 
          values.mobile = this.state.editProfile.mobile; 
          validation(values)} 
        }
        onSubmit= {(values, {setSubmitting, resetForm}) => submit(values, {setSubmitting, resetForm})}
        >
          {({ errors, touched , setFieldValue}) => (
          <Form className={classes.form} > 

            <Field name="name"  label="Name" component={TextField} />

            <Field name="gender" label="Gender"  options={[
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },]}
              component={Select}
            />  

            <Field component={FormikDatePicker} name="birthdate"  />  
               
            <Field name="maritalStatus" label="Marital Status" options={[
              { value: 'Single', label: 'Single' },
              { value: 'Married', label: 'Married' },]}
              component={Select}
            /> 
            
            <div className="form-group"> 
            <label htmlFor="mobile" className="dp-style" >Mobile</label>
            <Field name="mobile" label="mobile"
              render={() => 
                <RefInputMobile  onRefMobile={this.getMobileValue}
                className={` dp-style input-width ${ touched.mobile && errors.mobile ? "is-invalid" : ""}`}/>
              } 
            /> 
            <ErrorMessage component="div" name="mobile" className="invalid-feedback"/>
          </div>   

            <button type="submit" className=" button-test btn btn-primary btn-block"> Submit</button>
          </Form>
          )}  
        </Formik>  

        </MuiPickersUtilsProvider>  
      </Paper>     
    )
  }
}  
 
export default witheditprofile(withStyles(styles)(EditBasic), 'basic'); 