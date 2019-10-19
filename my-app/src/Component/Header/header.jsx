import React from 'react';
import './header.scss'; 

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      tabs: []
    };
  }

  componentWillMount() {
    this.setState({
      tabs: ['Home', 'News', 'Contact', 'About']
    });
  }

  
  render() { 
      return (
              <div className="header">
                <span>Hello React!</span> 
                {this.props.name}
                <ul className="clearfix"> 
                  {this.state.tabs.map((item, index) => (
                    <li key={index} onClick={() => this.props.onHeader(item)}>{item}</li>
                  ))}
                </ul>
              </div> 
      );
    }         
}

// class Header extends React.Component {
  
//     constructor(props) {
//       super(props);
      
//       this.state = {
//         tabs: []
//       };
//     }

//     componentWillMount() {
//       this.setState({
//         tabs: ['Home', 'News', 'Contact', 'About']
//       });
//     }
  
  
//   render() { 
//     return (
//             <div className="header">
//               <span>Hello React!</span> 
//               <ul className="clearfix"> 
//               {/* {tabName} */}
//                 {this.state.tabs.map(item => (
//                   <li>{item}</li>
//                 ))}
              
                
//                 {/* <li><a href="#home">Home</a></li>
//                 <li><a href="#news">News</a></li>
//                 <li><a href="#contact">Contact</a></li>
//                 <li><a href="#about">About</a></li> */}
//               </ul>
//             </div> 
//     );
//   }   
// } 

export default Header;