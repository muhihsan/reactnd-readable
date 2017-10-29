import { normalize, schema } from 'normalizr';
import * as types from '../actions/actionTypes';

const initialState = {
  entities: null,
  result: [],
  totalComments: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS_SUCCESS:
      const postsSchema = new schema.Entity('posts');
      const posts = normalize(action.posts, [postsSchema]);
      return {
        entities: posts.entities.posts,
        result: posts.result,
        totalComments: posts.result.reduce((acc, key) => {
          acc[key] = 0;
          return acc
        }, {})
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
        ],
        totalComments: {
          ...state.totalComments,
          [action.post.id]: 0
        }
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
        result: result,
        totalComments: Object.keys(state.totalComments)
          .filter(key => result.includes(key))
          .reduce((totalComments, key) => {
            totalComments[key] = state.totalComments[key];
            return totalComments;
          }, {})
      };
    case types.CHANGE_POST_VOTE_SUCCESS:
      return {
        entities: Object.keys(state.entities)
          .reduce((entities, key) => {
            entities[key] = action.post.id === key ? action.post : state.entities[key];
            return entities;
          }, {}),
        result: state.result,
        totalComments: state.totalComments
      };
    case types.GET_TOTAL_COMMENTS_FOR_POST_SUCCESS:
      return {
        entities: state.entities,
        result: state.result,
        totalComments: {
          ...state.totalComments,
          [action.id]: action.comments.comments ? action.comments.comments.length : 0
        }
      };
    default:
      return state;
  }
};