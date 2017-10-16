import { normalize, schema } from 'normalizr';
import * as types from '../actions/actionTypes';

const initialState = {
  entities: null,
  result: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.GET_ALL_CATEGORIES_SUCCESS:
      const categorySchema = new schema.Entity('categories', {}, { idAttribute: 'name' });
      const categories = normalize(action.categories, [ categorySchema ]);
      return {
        entities: categories.entities.categories,
        result: categories.result
      };
    default:
      return state;
  }
};