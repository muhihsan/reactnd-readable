import * as types from '../actions/actionTypes';

const initialState = false;

export default (state = initialState, action) => {
  if (action.type.endsWith('_SUCCESS'))
    return false;
  return true;
};