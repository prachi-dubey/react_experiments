import React from 'react';
import Checkbox from './checkbox.jsx'
import witheditprofile from './withEditProfile.jsx'
import { Formik, Form, Field, ErrorMessage } from "formik";
import Paper from '@material-ui/core/Paper';
import { Select } from "material-ui-formik-components/Select";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({  
  form: { padding: 10,
  },
}); 

class EditWork extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      editProfile: {
        profile: '',
        skills: []
      }
    }
  } 

  componentDidMount() {
    console.log("check me before going to form edit");
    this.setState({
      editProfile: {
        profile: this.props.work.profile,
        skills: this.props.work.skills,
      }
    })    
  }

  render() {
    const { classes } = this.props;
    // console.log(this.props);  
    const { validation, submit } = this.props;
    // console.log(this.props.work); 
    return (
      <Paper> 
        <Formik 
        enableReinitialize
        initialValues={this.state.editProfile} 
        validate={values  => validation(values) }
        onSubmit= {(values, {setSubmitting, resetForm}) =>
         submit(values, {setSubmitting, resetForm}) 
        }
        >
          {({ errors, touched}) => (
          <Form className={classes.form} > 
            <Field name="profile" label='Profile' options={[
              { value: 'Tester', label: 'Tester' },
              { value: 'Backend', label: 'Backend' },
              { value: 'Frontend', label: 'Frontend' },
              { value: 'Developer', label: 'Developer' },]}
              component={Select}
            />      
            
            {/* <Field name="skills" label='Skills' options={[
              { value: 'Java', label: 'Java' },
              { value: 'Oracle', label: 'Oracle' },
              { value: 'Angular', label: 'Angular' },
              { value: 'Database', label: 'Database' },]}
              component={Select}
            />  */}

            <div value='' className={`form-group ${ touched.skills && errors.skills ? "is-invalid" : ""}`}>
              <label>Skills</label>
              {/* <div className="checkbox"><Checkbox test= {this.props.work.skills}/></div> */}
              <div className="checkbox"><Checkbox test= {this.props.work.skills} name="skills" value="Java" /></div>
              <div className="checkbox"><Checkbox test= {this.props.work.skills} name="skills" value="Oracle" /></div>
              <div className="checkbox"><Checkbox test= {this.props.work.skills} name="skills" value="Angular" /></div>
              <div className="checkbox"><Checkbox test= {this.props.work.skills} name="skills" value="Database" /></div>
              <ErrorMessage component="div" name="skills" className="invalid-feedback"/>
            </div> 

            <button type="submit" className=" button-test btn btn-primary btn-block"> Submit</button>
          </Form>
          )}  
        </Formik>    
      </Paper>     
    )
  }
}  

export default witheditprofile(withStyles(styles)(EditWork), 'work');
