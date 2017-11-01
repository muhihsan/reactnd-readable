import * as types from '../actions/actionTypes';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMMENT_SUCCESS:
      return action.comment;
    default:
      return state;
  }
};