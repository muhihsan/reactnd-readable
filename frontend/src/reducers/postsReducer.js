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
      const posts = normalize(action.posts, [ postsSchema ]);
      return {
        entities: posts.entities.posts,
        result: posts.result
      };
    default:
      return state;
  }
};