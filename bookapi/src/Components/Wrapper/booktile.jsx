import React from 'react';
import './wrapper.scss'; 

const BookTile = props => (
  <div className="book-tile"> 
    { props.books.map(book => 
      <div key={book.id} className='col-md-3 col-sm-4'>
        <div className="thumbnail">
          <div className="pull-right clearfix star">
            <i className="check-isbn" data-detail={book.isbn13}></i>
            {/* <span class="fa fa-star selected"></span> */}
          </div>
          <div className="img-style">
            <img className="book-img" src={book.image} alt={book.title} />
          </div>
          <div className='caption'>
            <h3>{book.title}</h3>
            <div>{book.subtitle}</div>
            <div className="style">
              <button className='btn btn-primary' role='button'>More details</button>
            </div>
          </div>
        </div>
      </div>
      )}
  </div>
)

export default BookTile;

