import { normalize, schema } from 'normalizr';
import * as Types from '../actions/actionTypes';

const initialState = {
  entities: {},
  result: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case Types.GET_ALL_CATEGORIES_SUCCESS:
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