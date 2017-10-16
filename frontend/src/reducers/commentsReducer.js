import { normalize, schema } from 'normalizr';
import * as Types from '../actions/actionTypes';

const initialState = {
  entities: {},
  result: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case Types.GET_ALL_COMMENTS_FOR_POST_SUCCESS:
      const commentsSchema = new schema.Entity('comments');
      const comments = normalize(action.comments, [ commentsSchema ]);
      return {
        entities: comments.entities.comments,
        result: comments.result
      };
    case Types.CHANGE_COMMENT_VOTE_FOR_POST_SUCCESS:
      return {
        entities: {
          ...state.entities,
          [action.comment.id]: action.comment
        },
        result: [
          ...state.result
        ]
      };
    default:
      return state;
  }
};