import { normalize, schema } from 'normalizr';
import * as types from '../actions/actionTypes';

const initialState = {
  entities: null,
  result: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS_SUCCESS:
      const postsSchema = new schema.Entity('posts');
      const posts = normalize(action.posts, [postsSchema]);
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
    case types.DELETE_POST_SUCCESS:
      const result = state.result.filter(post => post !== action.post.id);
      return {
        entities: Object.keys(state.entities)
          .filter(key => result.includes(key))
          .reduce((entities, key) => {
            entities[key] = state.entities[key];
            return entities;
          }, {}),
        result: result
      };
    case types.CHANGE_POST_VOTE_SUCCESS:
      return {
        entities: Object.keys(state.entities)
          .reduce((entities, key) => {
            entities[key] = action.post.id === key ? action.post : state.entities[key];
            return entities;
          }, {}),
        result: state.result
      };
    default:
      return state;
  }
};