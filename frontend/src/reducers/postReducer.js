import * as Types from '../actions/actionTypes';

const initialState = null;

export default (state = initialState, action) => {
  switch(action.type) {
    case Types.GET_POST_SUCCESS:
    case Types.CHANGE_POST_VOTE_SUCCESS:
      return action.post;
    default:
      return state;
  }
};