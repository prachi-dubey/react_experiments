import React from 'react';
import Header from './Component/Header/header.jsx';
import Sidebar from './Component/Sidebar/sidebar.jsx';
import Container from './Component/Container/container.jsx';
import Footer from './Component/Footer/footer.jsx';
import Signup from './Component/Form/signup.jsx';
import PersonList from './Component/Axios/personList.jsx';


class App extends React.Component {
  constructor() {
    super()
    this.state = {  
      name: 'Prachi',
      containerChild: 'Home'
    };

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick(e) { 
    console.log('i am in parents ' + e);
    this.setState({
      containerChild: e
    });
  }
  
  render() {  

    return (
      <div className="App">

        <Signup/>
        <PersonList/>

        <div> <Header onHeader={this.handleClick} name={this.state.name}/> </div> 
        <Sidebar/>
        <Container tabs={this.state.containerChild}/>
        <Footer/>

      </div>
    );
  }   
}  

export default App;
