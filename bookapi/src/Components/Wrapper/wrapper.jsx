import React from 'react';
import API from './axios.jsx';
import BookTile from './booktile.jsx'; 

export default class Wrapper extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      books: []
    } 
  } 
 
  componentWillMount = () => {
    console.log('will mount ' + this.props.bookNameForApi);
  }

  componentDidMount = () => {
    console.log('Did mount ' + this.state.bookNameForApi);
    this.getBooksDetails({});
  } 

  getBooksDetails = (options) => {
    console.log(this.state.bookNameForApi);
    if(!options.subName) {
      options.subName = "JAVA";
    }
    API.get(options.subName).then(res => {
      const books = res.data.books;
        this.setState({ 
          books: (res && res.data && res.data.books) ? res.data.books : []
        });
      console.log(books);     
    });
  }

  componentWillUpdate = () => {
    // console.log('hello i am in will update ' + this.props.bookNameForApi);
  }
  
  componentDidUpdate = () => {
    if(this.props.bookNameForApi !== this.state.bookNameForApi) {
      console.log(this.props.bookNameForApi);
      
      this.setState({ 
        bookNameForApi : this.props.bookNameForApi
      }); 
      this.getBooksDetails({subName: this.props.bookNameForApi});
    }
  } 

  render() { 
    return ( 
      <div className="wrapper">
        {/* <h1> hello api {this.props.bookNameForApi} </h1> */}
        {this.state.books && this.state.books.length ? <BookTile books={this.state.books}/>: <WelcomeLoader/> }
      </div>       
    );
  }         
} 

function WelcomeLoader() {
  return  <div class="loading-wrapper clearfix">
            <div class="glyphicon glyphicon-refresh"></div>
          </div>
}



