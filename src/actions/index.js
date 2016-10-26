export function selectBook(book) {
  // select book is an action creator
  //
  // returns an action
  // an object with a type property
  // type and payload

  // types are usually moved to a separate file
  return {
    type: 'BOOK_SELECTED', // usually a variable
    payload: book,
  };
};
