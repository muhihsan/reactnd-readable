import { normalize, schema } from 'normalizr';
import * as types from '../actions/actionTypes';

const initialState = {
  entities: {},
  result: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.GET_ALL_POSTS_SUCCESS:
      const postsSchema = new schema.Entity('posts');
      const posts = normalize(action.posts, [ postsSchema ]);
      return {
        entities: posts.entities.posts,
        result: posts.result
      };
    case types.CREATE_POST_SUCCESS:
      return {
        entities: {
          ...state.entities,
          [action.post.id]: action.post
        },
        result: [
          ...state.result,
          action.post.id
        ]
      };
    default:
      return state;
  }
};