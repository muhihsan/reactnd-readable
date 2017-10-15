import * as Types from '../actions/actionTypes';

const initialState = null;

export default (state = initialState, action) => {
  switch(action.type) {
    case Types.GET_POST:
      return action.post;
    default:
      return state;
  }
};