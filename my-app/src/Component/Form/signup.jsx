import React from 'react';
import './signup.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        username: '',
        userAge: '' ,
        devloperProfile: ''
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
        [nam]: val
    });
  }

  handleSubmit(event) { 
    const userData = this.state;
    console.log('A name was submitted: ' + this.state.username.toUpperCase());
    console.log('A age was submitted: ' + this.state.userAge);
    console.log('A age was submitted: ' + this.state.devloperProfile);
    console.log(userData);

    event.preventDefault();
  }

  render() {

    return ( 
            <form onSubmit={this.handleSubmit} className="form-horizontal">
                <div className="container form-center signup">
                    <h2> Form Example </h2>
                    <div className="form-group row">
                        <label className="col-sm-3 col-xs-12">Name: </label>
                        <div className="col-sm-9 col-xs-12 input-group">
                            <input name="username" type="text" className="form-control"
                             onChange={this.handleInputChange}
                             placeholder="name"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-3 col-xs-12" >Age:</label>
                        <div className="col-sm-9 col-xs-12 input-group">
                            <input name="userAge" type="text" className="form-control" placeholder="10"
                            onChange={this.handleInputChange} 
                            />
                        </div>
                    </div>

                    <div className="row">
                        <label className="col-sm-4"> Developer Profile </label>
                        <div className="col-sm-8">
                            <label className="radio-inline dp-style">
                                <input name="devloperProfile" type="radio" 
                                value="FrontEnd"
                                onChange={this.handleInputChange}/> FrontEnd
                            </label>
                            <label className="radio-inline dp-style ">
                                <input  name="devloperProfile"  type="radio"
                                value='BackEnd' 
                                onChange={this.handleInputChange} /> BackEnd
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Submit" />
                </div>
            </form>
           
        );
    }
}

export default Signup;
