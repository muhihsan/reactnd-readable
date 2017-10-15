import CommentApi from '../api/commentApi';
import * as types from './actionTypes';

export const getAllCommentsForPostSuccess = (comments) => (
  { type: types.GET_ALL_COMMENTS_FOR_POST_SUCCESS, comments }
)

export const createCommentForPostSuccess = (comment) => (
  { type: types.CREATE_COMMENT_FOR_POST_SUCCESS, comment }
)

export const getAllCommentsForPost = (id) => (
  dispatch => (
    CommentApi.GetAllCommentsForPost(id).then(comments =>
      dispatch(getAllCommentsForPostSuccess(comments))
    ).catch(error => {
      throw(error);
    })
  )
);

export const createCommentForPost = (comment) => (
  dispatch => (
    CommentApi.CreateCommentForPost(comment).then(comment =>
      dispatch(createCommentForPostSuccess(comment))
    ).catch(error => {
      throw(error)
    })
  )
);