import React from 'react';
import { Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { connect } from 'react-redux';
import helpers from '../../../../Redux/helper';
import { setPostData } from '../../../../Redux/action'

class ModalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tempData: {        
        title: "", 
        url: "",
        subtitle: "",       
      }
    }
    this.getPostData = this.getPostData.bind(this);
  } 
  
  getPostData(e) {  
    var checkPost = helpers.getData('Posts');
    if(!checkPost) {
      checkPost = []; 
    }
    
    var time = new Date();
    e.email = this.props.login.loggedInUser.email;
    e.time = time.getTime();
    e.body = e.subtitle;
    e.id = this.props.posts.postData.length + 1;
    e.comments = [];
    e.state = false;
    checkPost.unshift(e);
    helpers.setData(checkPost, 'Posts');
    var arr = this.props.posts.postData;
    arr.unshift(e);
    this.props.setPostData(arr);
    this.props.onCloseModal();       
  }
    
  postDataValidation = (touched) => { 
    let errors = {};
    if (touched.title === "") {
      errors.title = "This field is required";
    }

    if (touched.subtitle === "") {
      errors.subtitle = "This field is required";
    } 
    
    if(touched.url === "") {
      errors.url = "This field is required";
    } else {
      var fileUploadPath = touched.url;
      var extension = fileUploadPath.substring(fileUploadPath.lastIndexOf('.') + 1).toLowerCase();
      if (extension === "png" || extension === "jpeg" || extension === "jpg") {
        // console.log(" extension matched");
      } else { 
        errors.url = "Please enter valid url with (png, jpeg, jpg) extension";
      }
    }
    return errors;
  }

  render() {
    return (
      <div className="login">
        <h1> Add Posts </h1> 
        <Formik
          initialValues = { this.state.tempData } 
          validate={touched  => this.postDataValidation(touched) }
          onSubmit={(values, {setSubmitting, resetForm}) => {    
            resetForm( this.state.tempData );  
            setSubmitting(false); 
            this.getPostData(values);         
          }}          
        >
          {({ props,touched, errors, isSubmitting  }) => (
            <Form>
              <Field  name="title" label="title for post" component={TextField} />
              <Field name="url" label="image url" component={TextField} />
              <Field name="subtitle" label="subtitle" component={TextField} />
              <button type="submit">  Submit </button>
            </Form>
          )}
        </Formik> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {  
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPostData: (payload) => dispatch(setPostData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);