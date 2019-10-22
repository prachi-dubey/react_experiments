import React from 'react';
import Header from './Components/Header/header.jsx';
import Sidebar from './Components/Sidebar/sidebarContainer.jsx';
import Wrapper from './Components/Wrapper/wrapper.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {  
      bookName: ''
    };

    this.getSubjectName = this.getSubjectName.bind(this);
  } 

  getSubjectName(e) { 
    console.log('i am in app ' + e);
    this.setState({
      bookName: e
   }); 
  }
  
  render() {  

    return (
      <div className="App">
        <div className="container">
          <Header/>
          <div className="row">
            <div className="col-sm-3">
              <Sidebar onBookName={this.getSubjectName}/>
            </div> 
            <div className="col-sm-9">
            <Wrapper bookNameForApi={this.state.bookName}/>
            </div>
          </div>
        </div>
      </div>
    );
  }   
}  

export default App;
