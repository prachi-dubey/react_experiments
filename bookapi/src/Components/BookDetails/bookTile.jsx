import React from 'react';
import './bookTile.scss'; 

const BookTile = props => (
  <div className="book-tile"> 
    { props.books.map((book, index) => 
      <div key={index} className='col-md-3 col-sm-4'>
        <div className="thumbnail">
          <div className="pull-right clearfix star">
            <i className="check-isbn" data-detail={book.isbn13}></i>
          </div>
          <div className="img-style">
            <img className="book-img" src={book.image} alt={book.title} />
          </div>
          <div className='caption'>
            <h3>{book.title}</h3>
            <div>{book.subtitle}</div>
            <div className="style">
              <button className='btn btn-primary'>More details</button>
            </div>
          </div>
        </div>
      </div>
      )}
  </div>
)

export default BookTile;

