import { normalize, schema } from 'normalizr';
import * as types from '../actions/actionTypes';

const initialState = {
  entities: null,
  result: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_COMMENTS_FOR_POST_SUCCESS:
      const commentsSchema = new schema.Entity('comments');
      const comments = normalize(action.comments, [commentsSchema]);
      return {
        entities: comments.entities.comments,
        result: comments.result
      };
    case types.CREATE_COMMENT_FOR_POST_SUCCESS:
      return {
        entities: {
          ...state.entities,
          [action.comment.id]: action.comment
        },
        result: [
          ...state.result,
          action.comment.id
        ]
      };
    case types.CHANGE_COMMENT_VOTE_FOR_POST_SUCCESS:
      return {
        entities: {
          ...state.entities,
          [action.comment.id]: action.comment
        },
        result: [
          ...state.result
        ]
      };
    case types.DELETE_COMMENT_FOR_POST_SUCCESS:
      const result = state.result.filter(comment => comment !== action.comment.id);
      return {
        entities: Object.keys(state.entities)
          .filter(key => result.includes(key))
          .reduce((entities, key) => {
            entities[key] = state.entities[key];
            return entities;
          }, {}),
        result: result
      };
    case types.EMPTY_COMMENTS_FOR_POST_SUCCESS:
      return initialState;
    default:
      return state;
  }
};