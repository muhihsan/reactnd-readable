import { normalize, schema } from 'normalizr';
import * as Types from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case Types.GET_ALL_CATEGORIES:
      const categorySchema = new schema.Entity('categories', {}, { idAttribute: 'name' });
      const categoryListSchema = [ categorySchema ];
      return normalize(action.categories, categoryListSchema);
    default:
      return state;
  }
};