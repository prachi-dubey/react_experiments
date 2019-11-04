import React from 'react';
import API from './bookRes.jsx';
import BookTile from './bookTile.jsx'; 

export default class BookList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      books: []
    } 
  } 

  componentDidMount = () => {
    this.getBooksDetails({});
  } 

  getBooksDetails = (options) => {
    // if(!options.subName) {
    //   options.subName = "JAVA";
    // }
    API.get(options.subName).then(res => {
      this.setState({ 
        books: (res && res.data && res.data.books) ? res.data.books : []
      });  
    });
  }

  componentDidUpdate = () => {
    if(this.props.bookNameForApi !== this.state.bookNameForApi) {
      this.setState({ 
        bookNameForApi : this.props.bookNameForApi
      }); 
      this.getBooksDetails({subName: this.props.bookNameForApi});
    }
  } 


  render() { 
    return ( 
      <div className="wrapper">
        {this.state.books && this.state.books.length ? <BookTile books={this.state.books}/>: <WelcomeLoader/> }
      </div>       
    );
  }         
} 

function WelcomeLoader() {
  return  <div className="loading-wrapper clearfix">
            <div className="glyphicon glyphicon-refresh"></div>
          </div>
} 



