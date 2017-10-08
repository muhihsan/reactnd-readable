import { normalize, schema } from 'normalizr';
import * as Types from '../actions/actionTypes';

const initialState = {
  entities: {},
  result: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case Types.GET_ALL_COMMENTS_FOR_POST:
      const commentsSchema = new schema.Entity('comments');
      const comments = normalize(action.comments, [ commentsSchema ]);
      return {
        entities: comments.entities.comments,
        result: comments.result
      };
    default:
      return state;
  }
};