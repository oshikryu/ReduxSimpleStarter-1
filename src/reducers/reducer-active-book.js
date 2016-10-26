// all reducers get two args
// current state
// or action
//
// reducers are only called when an action occurs
// state is always state the reducer is responsible for
export default function(state=null, action) {
  // do care about actions
  // always want to return a fresh object (without mutations)
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // do not care about actions
  return state;
}
