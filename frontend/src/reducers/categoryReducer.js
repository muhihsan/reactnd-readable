import * as Types from '../actions/actionTypes'; 

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case Types.GET_ALL_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};