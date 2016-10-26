import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <span>Select a book to get started</span>;
    }

    return (
      <div>
        <h3>Details For</h3>
        <div>
          Title: {this.props.book.title}
        </div>
        <div>
          Pages: {this.props.book.pages}
        </div>
      </div>
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
    book: state.activeBook,
  };
}
export default connect(mapStateToProps)(BookDetail);
