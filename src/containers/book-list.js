import React, { Component } from 'react';
// react and redux are separate
// react-redux makes the connect function available

// connect makes the component and the container that is aware of its state
// that is contained within redux
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (<li key={book.title} className="list-group-item">{book.title}</li>);
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

/*
 * takes application state and whatever gets returned here 
 * shows up as props inside of book-list
 *
 * returns an object that is set as props inside the component
 *
 */
function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

// we want to export the container in a container file
// first argument is function
// second argument is the arguments
export default connect(mapStateToProps)(BookList);
