import * as types from '../actions/actionTypes';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMMENT_SUCCESS:
      if (Object.keys(action.comment).length === 0 && action.comment.constructor === Object) {
        return initialState;
      }
      return action.comment;
    case types.EMPTY_COMMENT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};