import React, { Component } from 'react';
import { selectBook } from '../actions/index';
// ensures that actions created from action creators go through all the reducers
import { bindActionCreators } from 'redux';

// react and redux are separate
// react-redux makes the connect function available

// connect makes the component and the container that is aware of its state
// that is contained within redux
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (<li 
        key={book.title}
        onClick={() => {this.props.selectBook(book)}}
        className="list-group-item">
        {book.title}
      </li>
    );
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

// anything returned ends up as props on the bookList container
function mapDispatchToProps(dispatch) {
  // when selectBook is called, result should be passed
  // to all of the reducers
  return bindActionCreators({selectBook}, dispatch);
};

// we want to export the container in a container file
// first argument is function
// second argument is the arguments
//
// promote bookList from component to container
// needs to know about dispatch method
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
