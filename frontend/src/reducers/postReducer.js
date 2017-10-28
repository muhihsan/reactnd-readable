import * as types from '../actions/actionTypes';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POST_SUCCESS:
    case types.CHANGE_POST_VOTE_SUCCESS:
      return action.post;
    case types.EMPTY_POST_SUCCESS:
      return null;
    default:
      return state;
  }
};