import { normalize, schema } from 'normalizr';
import * as Types from '../actions/actionTypes';

const initialState = {
  entities: {},
  result: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case Types.GET_ALL_POSTS:
      const postsSchema = new schema.Entity('posts');
      return normalize(action.posts, [ postsSchema ]);
    default:
      return state;
  }
};