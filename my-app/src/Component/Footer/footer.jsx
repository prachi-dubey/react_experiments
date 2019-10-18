import React from 'react';
import './footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
  
class Footer extends React.Component {
  render() { 
    return (
            <div className="footer">
              <footer>
                <p>Posted by: Hege Refsnes</p>
                <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
              </footer>
            </div> 
    );
  }   
} 

export default Footer;